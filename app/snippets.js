function createDependencyProposals() {
    return [
        // web snippets
        {
            label: 'pnp-web-get',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: "Get current web.",
            insertText: [
                "pnp.sp.web.get().then({{1:w}} => {",
                    "\t{{}}",
                "});"
            ].join('\n')
        },
        {
            label: 'pnp-web-get-select',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: "Get current web with selected properties.",
            insertText: [
                "pnp.sp.web.select(\"{{1:Title}}\").get().then({{2:w}} => {",
                    "\t{{}}",
                "});"
            ].join('\n')
        },
        {
            label: 'pnp-web-get-allproperties',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: "Get AllProperties from current web.",
            insertText: [
                "pnp.sp.web.select(\"AllProperties\").expand(\"AllProperties\").get().then({{1:w}} => {",
                    "\t{{}}",
                "});"
            ].join('\n')
        },
        {
            label: 'pnp-web-open',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: "Open web from url.",
            insertText: [
                "import { Web } from \"pnp\";",
                "let web = new Web(\"{{1:https://my-tenant.sharepoint.com/sites/mysite}}\");",
                "web.get().then({{2:w}} => {",
                    "\t{{}}",
                "});",
            ].join('\n')
        },
        {
            label: 'pnp-web-open-delete',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: "Open web from url and delete it.",
            insertText: [
                "import { Web } from \"pnp\";",
                "let web = new Web(\"{{1:https://my-tenant.sharepoint.com/sites/mysite}}\");",
                "web.delete().then({{2:w}} => {",
                    "\t{{}}",
                "});",
            ].join('\n')
        },
        {
            label: 'pnp-web-update',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: "Update current web properties.",
            insertText: [
                "pnp.sp.web.update({",
                    "\tTitle: \"New Title\",",
                    "\tDescription: \"My new description\",",
                "}).then({{1:w}} => {",
                    "\t{{}}",
                "});"
            ].join('\n')
        },
    ];
}