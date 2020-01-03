import { IonContent, IonPage } from '@ionic/react'
import { ControlledEditor } from '@monaco-editor/react'
import { monaco } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  CompilerOptions,
  getDefaultCompilerOptions,
  transpileModule,
} from 'typescript'
import Header from '../../components/header'
import { IRootState } from '../../store'
import { getExtensionDirectory, loadDeclarations } from './utils'

export type BuiltinTheme = 'light' | 'dark'

const PnPjsConsole = () => {
  let completionDisposer: any
  monaco.config({
    urls: {
      monacoLoader: '',
      monacoBase: '/vs',
    },
  })

  // disposing snippets when umounting to avoid multiplying them
  useEffect(() => {
    return () => {
      completionDisposer.dispose()
    }
  }, [])

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

  const options: editor.IStandaloneEditorConstructionOptions = {
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
        lines.forEach(line => {
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
            .map(e => {
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

    completionDisposer = monacoInst.languages.registerCompletionItemProvider('typescript', {
      provideCompletionItems(model: any, position: any) {
        return {
          /* tslint:disable:no-invalid-template-strings */
          suggestions: [
            {
              label: 'snip-web-get',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Get current web.',
              insertText: [
                'import pnp from "@pnp/pnpjs"',
                'pnp.sp.web.get().then(${1:web} => {',
                '\tconsole.log(${1})',
                '});',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-web-get-select',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Get current web with selected properties.',
              insertText: [
                'import pnp from "@pnp/pnpjs"',
                'pnp.sp.web.select("${1:Title}").get().then(${2:web} => {',
                '\tconsole.log(${2}.${1})',
                '});',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-web-get-allproperties',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Get AllProperties from current web.',
              insertText: [
                'import pnp from "@pnp/pnpjs"',
                'pnp.sp.web.select("AllProperties").expand("AllProperties").get().then(${1:web} => {',
                '\tconsole.log(${1})',
                '});',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-web-open',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Open web from url.',
              insertText: [
                'import { Web } from "@pnp/sp";',
                'let web = new Web("https://${1:tenant}.sharepoint.com");',
                'web.get().then(${2:w} => {',
                '\tconsole.log(${2})',
                '});',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-web-open-delete',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Open web from url and delete it.',
              insertText: [
                'import { Web } from "@pnp/sp";',
                'let web = new Web("https://${1:tenant}.sharepoint.com/mysubsite");',
                'web.delete().then(${2:w} => {',
                '\tconsole.log(${2})',
                '});',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-web-update',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Update current web properties.',
              insertText: [
                'import pnp from "@pnp/pnpjs"',
                'pnp.sp.web.update({',
                '\t${1:Title}: "New Title",',
                '\t${2:Description}: "My new description",',
                '}).then(${3:web} => {',
                '\tconsole.log(${3})',
                '});',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-get-group-data',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Get office groups data from graph.microsoft.com',
              insertText: [
                "getGroupData('${1:https://graph.microsoft.com/v1.0/groups}')",
                '\t.then(data => {',
                '\t\tconsole.log(data);',
                '});\n',
                '// Gets the accesstoken and fetches the desired url',
                '// Scope: Group.ReadWrite.All, Reports.Read.All',
                'async function getGroupData(url: string, method?: string) {',
                '\tlet rspCtx = await fetch(`${(window as any)._spPageContextInfo.webAbsoluteUrl}/_api/contextinfo`, {',
                "\t\tmethod: 'POST',",
                "\t\tcredentials: 'include',",
                '\t\theaders: new Headers({',
                "\t\t\t'Accept': 'application/json; odata=verbose'",
                '\t\t})',
                '\t});\n',
                '\tlet data = await rspCtx.json();',
                "\tlet payload = { 'resource': 'https://graph.microsoft.com' };",
                '\tlet token = await fetch(`${(window as any)._spPageContextInfo.webAbsoluteUrl}/_api/SP.OAuth.Token/Acquire`, {',
                "\t\tmethod: 'POST',",
                "\t\tcredentials: 'include',",
                '\t\tbody: JSON.stringify(payload),',
                '\t\theaders: new Headers({',
                "\t\t\t'Accept': 'application/json; odata=verbose',",
                "\t\t\t'Content-Type': 'application/json;odata=nometadata',",
                "\t\t\t'X-RequestDigest': data.d.GetContextWebInformation.FormDigestValue",
                '\t\t})',
                '\t});\n',
                '\tlet rspToken = await token.json();',
                '\tlet reqData = await fetch(url, {',
                "\t\tmethod: method ? method : 'GET',",
                '\t\theaders: new Headers({',
                "\t\t\t'Accept': 'application/json',",
                "\t\t\t'Authorization': 'Bearer ' + rspToken.d.access_token",
                '\t\t})',
                '\t});\n',
                '\treturn reqData.json();',
                '}',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-headers',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Include request headers for SP2013',
              insertText: [
                'sp.setup({',
                '\tsp:{',
                '\t\theaders: {',
                '\t\t\t"Accept": "application/json; odata=verbose"',
                '\t\t}',
                '\t}',
                '});',
              ].join('\n'),
              range: undefined as any,
            },
            {
              label: 'snip-graphman',
              kind: monacoInst.languages.CompletionItemKind.Function,
              insertTextRules: monacoInst.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: 'Use fetch and grapgman token to query graph.microsoft.com api',
              insertText: [
                '// use GraphMan to sign in first and grant needed permisisons',
                "fetch('https://graph.microsoft.com/v1.0/me', {",
                "\tmethod: 'GET',",
                '\theaders: new Headers({',
                "\t\t'Accept': 'application/json',",
                "\t\t'Authorization': 'Bearer GraphManToken'",
                '\t})',
                '}).then((resp) => resp.json())',
                '\t.then(console.log)',
              ].join('\n'),
              range: undefined as any,
            },
          ],
          /* tslint:enable:no-invalid-template-strings */
        }
      },
    })
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
