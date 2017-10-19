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
    {
      label: 'snip-get-group-data',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Get office groups data from graph.microsoft.com",
      insertText: {
        value: [
          "getGroupData('${1:https://graph.microsoft.com/v1.0/groups}')",
          "\t.then(data => {",
          "\t\tconsole.log(data);",
          "});\n",
          "// Gets the accesstoken and fetches the desired url",
          "// Scope: Group.ReadWrite.All, Reports.Read.All",
          "async function getGroupData(url: string, method?: string) {",
            "\tlet rspCtx = await fetch(`${(window as any)._spPageContextInfo.webAbsoluteUrl}/_api/contextinfo`, {",
              "\t\tmethod: 'POST',",
              "\t\tcredentials: 'include',",
              "\t\theaders: new Headers({",
                "\t\t\t'Accept': 'application/json; odata=verbose'",
              "\t\t})",
            "\t});\n",
            "\tlet data = await rspCtx.json();",
            "\tlet payload = { 'resource': 'https://graph.microsoft.com' };",
            "\tlet token = await fetch(`${(window as any)._spPageContextInfo.webAbsoluteUrl}/_api/SP.OAuth.Token/Acquire`, {",
              "\t\tmethod: 'POST',",
              "\t\tcredentials: 'include',",
              "\t\tbody: JSON.stringify(payload),",
              "\t\theaders: new Headers({",
                "\t\t\t'Accept': 'application/json; odata=verbose',",
                "\t\t\t'Content-Type': 'application/json;odata=nometadata',",
                "\t\t\t'X-RequestDigest': data.d.GetContextWebInformation.FormDigestValue",
              "\t\t})",
            "\t});\n",
            "\tlet rspToken = await token.json();",
            "\tlet reqData = await fetch(url, {",
              "\t\tmethod: method ? method : 'GET',",
              "\t\theaders: new Headers({",
                "\t\t\t'Accept': 'application/json',",
                "\t\t\t'Authorization': 'Bearer ' + rspToken.d.access_token",
              "\t\t})",
            "\t});\n",
            "\treturn reqData.json();",
          "}",
        ].join('\n')
      }
    },
    {
      label: 'snip-headers',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Include request headers for SP2013",
      insertText: {
        value: [
          "pnp.setup({",
          "\tsp:{",
          "\t\theaders: {",
          "\t\t\t\"Accept\": \"application/json; odata=verbose\"",
          "\t\t}",
          "\t}",
          "});"
        ].join('\n')
      }
    },
  ];
}


