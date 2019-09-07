import React from "react";
import MonacoEditor from "react-monaco-editor";
import { editor } from "monaco-editor";
import * as editorApi from "monaco-editor/esm/vs/editor/editor.api";
import {

  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import MyHeader from "../../components/navigation/header";

export interface IEditorProps {}

export default class PnPjsConsole extends React.Component<IEditorProps> {
  private editor!: editor.IStandaloneCodeEditor;

  public state: {
    code: string;
  } = {
    code: ""
  };

  constructor(props: any) {
    super(props);
  }



  private editorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: typeof editorApi
  ) => {
    this.editor = editor;
    editor.focus();

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

    if (monaco.editor.getModel(monaco.Uri.parse("inmemory://tmp.ts"))) {
      editor.setModel(
        monaco.editor.getModel(monaco.Uri.parse("inmemory://tmp.ts"))
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
          monaco.Uri.parse("inmemory://tmp.ts")
        )
      );
    }

    editor.focus();
  };

  private onChange = (newCode: string, e: any) => {
    this.setState({
      code: newCode
    });
  };

  public render() {
    const code = this.state.code;

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
      // theme: "vs-dark",
      fontSize: 16,
      // glyphMargin: true,
      renderIndentGuides: true,
      suggestOnTriggerCharacters: true,
      automaticLayout: true
    };

    return (
      <>
        <IonPage>
          <MyHeader />
          <IonContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <MonacoEditor
                    language="typescript"
                    // theme="vs-dark"
                    value={code}
                    width="100%"
                    height="100vh"
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      </>
    );
  }
}
