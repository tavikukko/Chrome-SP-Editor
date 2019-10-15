import { IonContent, IonPage } from '@ionic/react'
import { ControlledEditor } from '@monaco-editor/react'
import { monaco } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  CompilerOptions,
  getDefaultCompilerOptions,
  transpileModule,
} from 'typescript'
import Header from '../../components/header'
import { IRootState } from '../../store'

export type BuiltinTheme = 'light' | 'dark'

const PnPjsConsole = () => {
  monaco.config({
    urls: {
      monacoLoader: '',
      monacoBase: '/vs',
    },
  })

  const { isDark } = useSelector((state: IRootState) => state.home)

  const mod_common = `var mod_common = '${chrome.extension.getURL('bundles/common.es5.umd.bundle.js')}';`
  const mod_config = `var mod_config = '${chrome.extension.getURL('bundles/config-store.es5.umd.bundle.js')}';`
  const mod_graph = `var mod_graph = '${chrome.extension.getURL('bundles/graph.es5.umd.bundle.js')}';`
  const mod_logging = `var mod_logging = '${chrome.extension.getURL('bundles/logging.es5.umd.bundle.js')}';`
  const mod_odata = `var mod_odata = '${chrome.extension.getURL('bundles/odata.es5.umd.bundle.js')}';`
  const mod_pnpjs = `var mod_pnpjs = '${chrome.extension.getURL('bundles/pnpjs.es5.umd.bundle.js')}';`
  const mod_addin = `var mod_addin = '${chrome.extension.getURL('bundles/sp-addinhelpers.es5.umd.bundle.js')}';`
  const mod_client = `var mod_client = '${chrome.extension.getURL('bundles/sp-clientsvc.es5.umd.bundle.js')}';`
  const mod_taxonomy = `var mod_taxonomy = '${chrome.extension.getURL('bundles/sp-taxonomy.es5.umd.bundle.js')}';`
  const mod_sp = `var mod_sp = '${chrome.extension.getURL('bundles/sp.es5.umd.bundle.js')}';`
  const sj = `var sj = '${chrome.extension.getURL('bundles/system.js')}';`

  const options: editor.IEditorConstructionOptions = {
    language: 'typescript',
    lineNumbers: 'on',
    roundedSelection: true,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: 'vs-dark',
    fontSize: 16,
    // glyphMargin: true,
    renderIndentGuides: true,
    suggestOnTriggerCharacters: true,
  }

  const handleEditorChange = (ev: any, value: any) => {
    return value
  }

  const getExtensionDirectory = (): Promise<DirectoryEntry> =>
    new Promise(resolve => chrome.runtime.getPackageDirectoryEntry(resolve))

  const getDirectory = (
    dirEntry: DirectoryEntry,
    path: string,
  ): Promise<DirectoryEntry> =>
    new Promise(resolve =>
      dirEntry.getDirectory(path, {}, (entry: DirectoryEntry) => resolve(entry)),
    )

  const readDirRecursive = async (
    entry: DirectoryEntry,
    files: DirectoryEntry[] = [],
  ) => {
    const entries = await readEntries(entry)

    for (const key in entries) {
      if (entries[key].isDirectory) {
        await readDirRecursive(entries[key] as DirectoryEntry, files)
      } else {
        files.push(entries[key])
      }
    }

    return files
  }

  const readEntries = (dir: DirectoryEntry): Promise<DirectoryEntry[]> => {
    return new Promise(resolve => {
      const reader = dir.createReader()
      reader.readEntries(entries => resolve(entries as any))
    })
  }

  const loadDeclarations = async (
    directoryEntry: DirectoryEntry,
    dir: string,
    monacoInst: any,
  ) => {
    const subDirectoryEntry = await getDirectory(
      directoryEntry,
      dir.replace('/crxfs', ''),
    )
    const entries = await readDirRecursive(subDirectoryEntry)

    for (const entry of entries) {
      const fullpath = entry.fullPath.replace('/crxfs/', '')
      const file = await fetch(fullpath)
      const content = await file.text()
      monacoInst.languages.typescript.typescriptDefaults.addExtraLib(
        content,
        'file:///' + fullpath,
      )
    }
  }

  async function handleEditorDidMount(
    _: any,
    editorInst: editor.IStandaloneCodeEditor,
  ) {
    const monacoInst = await monaco.init()

    const directoryEntry = await getExtensionDirectory()
    await loadDeclarations(directoryEntry, '@pnp', monacoInst)
    await loadDeclarations(directoryEntry, '@microsoft', monacoInst)

    monacoInst.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    })

    monacoInst.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monacoInst.languages.typescript.ScriptTarget.ES2018,
      allowNonTsExtensions: true,
      moduleResolution:
        monacoInst.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monacoInst.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      typeRoots: ['node_modules/@pnp', 'node_modules/@microsoft'],
    })

    if (
      monacoInst.editor.getModel(
        monacoInst.Uri.parse('file:///pnpjsconsole.ts'),
      )
    ) {
      editorInst.setModel(
        monacoInst.editor.getModel(
          monacoInst.Uri.parse('file:///pnpjsconsole.ts'),
        ),
      )
    } else {
      editorInst.setModel(
        monacoInst.editor.createModel(
          `// Hit CTRL/CMD + D to run the code, view console for results
// below there is some some sample snippets

// using @pnp/sp
import { sp } from "@pnp/sp";
sp.web.select("Title").get().then(w => {
    console.log("Web Title: " + w.Title);
});

// using SPHttpClient for testing SP REST APIs
import { SPHttpClient } from '@pnp/sp';
(async () => {
    const siteObj = await sp.web.select('Url').get();
    const endpoint = siteObj.Url + '/_api/web'; // add your endpoint here
    // const payload = { key: 1 };
    const client = new SPHttpClient();
    const response = await client.post(endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(payload),
    })
    const result = await response.json();
    console.log(result);
})()
    .catch(console.warn);

// using @pnp/pnpjs
import pnp from "@pnp/pnpjs";
pnp.sp.web.get().then(w => {
    console.log(JSON.stringify(w, null, 4));
});

// using @pnp/common
import { getGUID } from "@pnp/common";
console.log(getGUID());

// using @pnp/logging
import { Logger, LogLevel, ConsoleListener } from "@pnp/logging";
Logger.subscribe(new ConsoleListener());
Logger.activeLogLevel = LogLevel.Verbose;
Logger.write("This is logging a simple string", LogLevel.Info);

// using @pnp/graph (modern page in browser)
// before using @pnp/graph, you need to grant needed API permissions
// to 'SharePoint Online Client Extensibility Web Application Principal' AAD Application
// from https://aad.portal.azure.com
import { graph } from "@pnp/graph"
if ((window as any).moduleLoaderPromise)
(window as any).moduleLoaderPromise.then(e => {
    graph.setup({
        spfxContext: e.context
    })
    graph.groups.get().then(grps => {
        console.log(grps);
    })
})
else console.log("to work with graph, switch to modern page!")

// using @pnp/sp-taxonomy
import { taxonomy } from "@pnp/sp-taxonomy"
taxonomy.termStores.get().then(ts => {
    console.log(ts);
})`,
          'typescript',
          monacoInst.Uri.parse('file:///pnpjsconsole.ts'),
        ),
      )
    }

    editorInst.addCommand(
      // tslint:disable-next-line:no-bitwise
      monacoInst.KeyMod.CtrlCmd | monacoInst.KeyCode.KEY_D,
      async () => {
        const compilerOptions: CompilerOptions = getDefaultCompilerOptions()
        const trasnpiled = transpileModule(editorInst.getModel()!.getValue(), {
          compilerOptions,
        })
        const lines = trasnpiled.outputText.split('\n')
        const code: any[] = []
        const prepnp: any[] = []
        lines.forEach(function(line) {
          // remove imports
          if (
            line.toLowerCase().indexOf(' = require') === -1 &&
            line.toLowerCase().indexOf('use strict') === -1 &&
            line.toLowerCase().indexOf('__esmodule') === -1
          ) {
            code.push(line)
          }
          if (line.toLowerCase().indexOf(' = require') > -1) {
            // fix imports

            const lineRe: any = line.match('var (.*) = require')
            if (lineRe) {
              let mod = -1
              mod = line.indexOf('@pnp/common') > -1 ? 0 : mod
              mod = line.indexOf('@pnp/config-store') > -1 ? 1 : mod
              mod = line.indexOf('@pnp/graph') > -1 ? 2 : mod
              mod = line.indexOf('@pnp/logging') > -1 ? 3 : mod
              mod = line.indexOf('@pnp/odata') > -1 ? 4 : mod
              mod = line.indexOf('@pnp/pnpjs') > -1 ? 5 : mod
              mod = line.indexOf('@pnp/sp-addinhelpers') > -1 ? 6 : mod
              mod = line.indexOf('@pnp/sp-clientsvc') > -1 ? 7 : mod
              mod = line.indexOf('@pnp/sp') > -1 ? 8 : mod
              mod = line.indexOf('@pnp/sp-taxonomy') > -1 ? 9 : mod

              prepnp.push(`var ${lineRe[1]} = modules[${mod}];`)
            }
          }
        })

        code.pop()

        const exescript = [
          'var exescript = function (script) {',
          '\t var params = arguments;',
          '\t if ( window._spPageContextInfo && !window._spPageContextInfo.speditorctx ) {',

          '\t\t if (typeof SystemJS == "undefined") {',
          '\t\t\t var s = document.createElement("script");',
          '\t\t\t s.src = sj;',
          '\t\t\t s.onload = function () {',
          '\t\t\t\t script.apply(this, params);',
          '\t\t\t };',
          '\t\t\t (document.head || document.documentElement).appendChild(s);',
          '\t\t }',
          '\t\t else script.apply(this, params);',
          '\t }',
          '\t else if ( window.moduleLoaderPromise ) {',
          '\t\t window.moduleLoaderPromise.then(function (e) {',
          '\t\t\t window._spPageContextInfo = e.context._pageContext._legacyPageContext;',
          '\t\t\t window._spPageContextInfo.speditorctx = true;',
          '\t\t\t if (typeof SystemJS == "undefined") {',
          '\t\t\t\t var s = document.createElement("script");',
          '\t\t\t\t s.src = sj;',
          '\t\t\t\t s.onload = function () {',
          '\t\t\t\t\t  script.apply(this, params);',
          '\t\t\t\t };',
          '\t\t\t\t (document.head || document.documentElement).appendChild(s);',
          '\t\t\t }',
          '\t\t\t else script.apply(this, params);',
          '\t\t });',
          '\t }',
          '}',
        ].join('\n')

        const execme = [
          'var execme = function execme() {',
          '\tPromise.all([SystemJS.import(mod_common),SystemJS.import(mod_config),SystemJS.import(mod_graph),SystemJS.import(mod_logging),SystemJS.import(mod_odata),SystemJS.import(mod_pnpjs),SystemJS.import(mod_addin),SystemJS.import(mod_client),SystemJS.import(mod_sp),SystemJS.import(mod_taxonomy)]).then(function (modules) {',
          '\t\t' + prepnp.join('\n'),
          '\t\t// Your code starts here',
          '\t\t// #####################',
          '' +
            code
              .map(function(e) {
                return '\t\t\t' + e
              })
              .join('\n'),
          '\t\t// #####################',
          '\t\t// Your code ends here',
          '\t});',
          '};',
        ].join('\n')

        const script =
          // tslint:disable-next-line:prefer-template
          mod_common + '\n' + mod_config + '\n' + mod_graph + '\n' + mod_logging + '\n' +
          mod_odata + '\n' + mod_pnpjs + '\n' + mod_addin + '\n' + mod_client + '\n' +
          mod_sp + '\n' + mod_taxonomy + '\n' + sj + '\n\n' +
          exescript + '\n\n' + execme + '\n\n exescript(execme);'

        chrome.devtools.inspectedWindow.eval(script)
      },
    )
    editorInst.focus()
  }

  return (
    <>
      <IonPage>
        <Header title={'PnPjs Console'} />
        <IonContent>
          <ControlledEditor
            height='90vh'
            options={options}
            theme={isDark ? 'dark' : 'light'}
            loading={''}
            // value={editorCode}
            onChange={handleEditorChange}
            editorDidMount={handleEditorDidMount}
            language='typescript'
          />
        </IonContent>
      </IonPage>
    </>
  )
}

export default PnPjsConsole
