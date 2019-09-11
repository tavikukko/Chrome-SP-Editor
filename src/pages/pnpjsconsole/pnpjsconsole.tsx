import React, { useState } from "react";
import { editor } from "monaco-editor";
// import * as editorApi from "monaco-editor/esm/vs/editor/editor.api";
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import Header from "../../components/navigation/header";
import { ControlledEditor } from "@monaco-editor/react";
import { monaco } from "@monaco-editor/react";
import {
  CompilerOptions,
  getDefaultCompilerOptions,
  transpileModule,
  TranspileOutput,
  ModuleKind
} from "typescript";

const PnPjsConsole = () => {
  monaco.config({
    urls: {
      monacoLoader: "",
      monacoBase: "/vs"
    }
  });

  const [editorCode, setEditorCode] = useState("");

  const options: editor.IEditorConstructionOptions = {
    language: "typescript",
    lineNumbers: "on",
    roundedSelection: true,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: "vs-dark",
    fontSize: 16,
    //glyphMargin: true,
    renderIndentGuides: true,
    suggestOnTriggerCharacters: true
  };

  const handleEditorChange = (ev: any, value: any) => {
    setEditorCode(value);
    return value;
  };

  const getExtensionDirectory = (): Promise<DirectoryEntry> =>
    new Promise(resolve => chrome.runtime.getPackageDirectoryEntry(resolve));

    const getDirectory = (dirEntry: DirectoryEntry, path: string, options?: Flags): Promise<DirectoryEntry> =>
    new Promise(resolve => dirEntry.getDirectory(path,{},(entry: DirectoryEntry) => resolve(entry)));

  const readDirRecursive = async (entry: DirectoryEntry, files: DirectoryEntry[] = []) => {
    const entries = await readEntries(entry);

    for (const key in entries) {
      const childEntry = entries[key];

      if (childEntry.isDirectory) {
        await readDirRecursive(childEntry as DirectoryEntry, files);
      } else {
        files.push(childEntry);
      }
    }

    return files;
  };

  const readEntries = (dir: DirectoryEntry): Promise<DirectoryEntry[]> => {
    return new Promise(resolve => {
      const reader = dir.createReader();
      reader.readEntries(entries => resolve(entries as any));
    });
  };

  const loadDeclarations = async (directoryEntry: DirectoryEntry, dir: string, monaco: any) => {
    const subDirectoryEntry = await getDirectory(
      directoryEntry,
      dir.replace("/crxfs", "")
    );
    const entries = await readDirRecursive(subDirectoryEntry);

    for (const entry of entries) {
      var fullpath = entry.fullPath.replace("/crxfs/", "");
      const file = await fetch(fullpath);
      const content = await file.text();
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        content,
        'file:///' + fullpath
      );
    }
  };

  async function handleEditorDidMount(
    _: any,
    editor: editor.IStandaloneCodeEditor
  ) {
    const monacoInst = await monaco.init();

    const directoryEntry = await getExtensionDirectory();
    await loadDeclarations(directoryEntry, '@pnp', monacoInst);
    await loadDeclarations(directoryEntry, '@microsoft', monacoInst);

    monacoInst.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false
    });

    monacoInst.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monacoInst.languages.typescript.ScriptTarget.ES2018,
      allowNonTsExtensions: true,
      moduleResolution:
        monacoInst.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monacoInst.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      typeRoots: ["node_modules/@pnp", "node_modules/@microsoft"]
    });

    if (
      monacoInst.editor.getModel(monacoInst.Uri.parse("file:///pnpjsconsole.ts"))
    ) {
      editor.setModel(
        monacoInst.editor.getModel(monacoInst.Uri.parse("file:///pnpjsconsole.ts"))
      );
    } else {
      editor.setModel(
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
          "typescript",
          monacoInst.Uri.parse("file:///pnpjsconsole.ts")
        )
      );
    }

    editor.addCommand(
      monacoInst.KeyMod.CtrlCmd | monacoInst.KeyCode.KEY_D,
      async () => {
        const compilerOptions: CompilerOptions = getDefaultCompilerOptions();
        const trasnpiled = transpileModule(editor.getModel()!.getValue(), {
          compilerOptions
        });
        // compilerOptions: { module: ModuleKind.None }
        var lines = trasnpiled.outputText.split("\n");
        let code: any[] = [];
        var prepnp = [];
        lines.forEach(function(line) {
          // remove imports
          if (
            line.toLowerCase().indexOf(" = require") == -1 &&
            line.toLowerCase().indexOf("use strict") == -1 &&
            line.toLowerCase().indexOf("__esmodule") == -1
          ) {
            code.push(line);
          }
          if (line.toLowerCase().indexOf(" = require") > -1) {
            // fix imports

            console.log(line);
            let lineRe: any = line.match("var (.*) = require");
            if (lineRe) {
              let mod = -1;
              mod = line.indexOf("@pnp/common") > -1 ? 0 : mod;
              mod = line.indexOf("@pnp/config-store") > -1 ? 1 : mod;
              mod = line.indexOf("@pnp/graph") > -1 ? 2 : mod;
              mod = line.indexOf("@pnp/logging") > -1 ? 3 : mod;
              mod = line.indexOf("@pnp/odata") > -1 ? 4 : mod;
              mod = line.indexOf("@pnp/pnpjs") > -1 ? 5 : mod;
              mod = line.indexOf("@pnp/sp-addinhelpers") > -1 ? 6 : mod;
              mod = line.indexOf("@pnp/sp-clientsvc") > -1 ? 7 : mod;
              mod = line.indexOf("@pnp/sp") > -1 ? 8 : mod;
              mod = line.indexOf("@pnp/sp-taxonomy") > -1 ? 9 : mod;

              prepnp.push("var " + lineRe[1] + " = modules[" + mod + "];");
            }
          }
        });

        code.pop();
        console.log(code);
      }
    );
    editor.focus();
  }

  return (
    <>
      <IonPage>
        <Header title={"PnPjs Console"} />
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <ControlledEditor
                  height="90vh"
                  options={options}
                  theme={"light"}
                  loading={""}
                  // value={editorCode}
                  onChange={handleEditorChange}
                  editorDidMount={handleEditorDidMount}
                  language="typescript"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default PnPjsConsole;
