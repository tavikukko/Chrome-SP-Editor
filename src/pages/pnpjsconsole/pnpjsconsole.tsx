import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import { editor } from "monaco-editor";
import * as editorApi from "monaco-editor/esm/vs/editor/editor.api";
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import Header from "../../components/navigation/header";

const PnPjsConsole = () => {

  const [editorCode, setEditorCode] = useState("");

  const options: editor.IEditorConstructionOptions = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: true
    },
    language: "typescript",
    lineNumbers: "on",
    roundedSelection: true,
    scrollBeyondLastLine: true,
    readOnly: false,
    theme: "vs-ligth",
    fontSize: 16,
    renderIndentGuides: true,
    suggestOnTriggerCharacters: true,
    automaticLayout: true
  };

  const onChange = (newCode: string) => {
    setEditorCode(newCode);
  };

  const editorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: typeof editorApi
  ) => {

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false
    });

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2018,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      typeRoots: ["node_modules/@pnp"]
    });

    if (monaco.editor.getModel(monaco.Uri.parse("inmemory://tmp2.ts"))) {
      editor.setModel(
        monaco.editor.getModel(monaco.Uri.parse("inmemory://tmp2.ts"))
      );
    } else {
      editor.setModel(
        monaco.editor.createModel(
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
          monaco.Uri.parse("inmemory://tmp2.ts")
        )
      );
    }

    editor.focus();
  };

  return (
    <>
      <IonPage>
      <Header title={'PnPjs Console'} />
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <MonacoEditor
                  language="typescript"
                  theme="vs-ligth"
                  value={editorCode}
                  width="100%"
                  height="100vh"
                  options={options}
                  onChange={onChange}
                  editorDidMount={editorDidMount}
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
