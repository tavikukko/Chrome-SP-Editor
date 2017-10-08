function createDependencyProposals() {
  return [
    // web snippets
    {
      label: 'snip-web-get',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Get current web.",
      insertText: {
        value: [
          "pnp.sp.web.get().then(${1:web} => {",
            "\tconsole.log(${1})",
          "});"
        ].join('\n')
      }
    },
    {
      label: 'snip-web-get-select',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Get current web with selected properties.",
      insertText: {
        value: [
          "pnp.sp.web.select(\"${1:Title}\").get().then(${2:web} => {",
            "\tconsole.log(${2}.${1})",
          "});"
        ].join('\n')
      }
    },
    {
      label: 'snip-web-get-allproperties',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Get AllProperties from current web.",
      insertText: {
        value: [
          "pnp.sp.web.select(\"AllProperties\").expand(\"AllProperties\").get().then(${1:web} => {",
            "\tconsole.log(${1})",
          "});"
        ].join('\n')
      }
    },
    {
      label: 'snip-web-open',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Open web from url.",
      insertText: {
        value: [
          "import { Web } from \"pnp\";",
          "let web = new Web(\"https://${1:tenant}.sharepoint.com\");",
          "web.get().then(${2:w} => {",
            "\tconsole.log(${2})",
          "});",
        ].join('\n')
      }
    },
    {
      label: 'snip-web-open-delete',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Open web from url and delete it.",
      insertText: {
        value: [
          "import { Web } from \"pnp\";",
          "let web = new Web(\"https://${1:tenant}.sharepoint.com/mysubsite\");",
          "web.delete().then(${2:w} => {",
            "\tconsole.log(${2})",
          "});",
        ].join('\n')
      }
    },
    {
      label: 'snip-web-update',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Update current web properties.",
      insertText: {
        value: [
          "pnp.sp.web.update({",
            "\t${1:Title}: \"New Title\",",
            "\t${2:Description}: \"My new description\",",
          "}).then(${3:web} => {",
            "\tconsole.log(${3})",
          "});",
        ].join('\n')
      }
    },
  ];
}
