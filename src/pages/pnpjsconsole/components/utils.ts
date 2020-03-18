/// <reference types='../../../../node_modules/monaco-editor/monaco' />

import { IDefinitions } from '../../../store/pnpjsconsole/types'

export const getDirectory = (dirEntry: DirectoryEntry, path: string): Promise<DirectoryEntry> => {
  return new Promise(resolve => dirEntry.getDirectory(path, {}, (entry: DirectoryEntry) => resolve(entry)))
}

export const readDirRecursive = async (
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

export const readEntries = (dir: DirectoryEntry): Promise<DirectoryEntry[]> => {
  return new Promise(resolve => {
    const reader = dir.createReader()
    reader.readEntries(entries => resolve(entries as any))
  })
}

export const loadDefinitions = async (
  directoryEntry: DirectoryEntry,
  dir: string[],
) => {
  return new Promise<IDefinitions[]>(async resolve => {
    const declarations: IDefinitions[]= []
    await Promise.all(dir.map(async di => {
      const subDirectoryEntry = await getDirectory(directoryEntry, di.replace('/crxfs', ''))
      const entries = await readDirRecursive(subDirectoryEntry)
      for (const entry of entries) {
        const fullpath = entry.fullPath.replace('/crxfs/', '')
        const file = await fetch(fullpath)
        const content = await file.text()
        if (fullpath.endsWith('/index.d.ts')) {
          const newPath = fullpath.replace('/index.d.ts', '.d.ts')
          const newContent = `export * from "./${newPath.substring(newPath.lastIndexOf('/') + 1).replace('.d.ts', '')}/index";`
          declarations.push({ content: newContent, filePath: newPath })
        }
        declarations.push({ content, filePath: fullpath })
      }
    }))
    resolve(declarations)
  })
}

export const getExtensionDirectory = (): Promise<DirectoryEntry> =>
  new Promise(resolve => chrome.runtime.getPackageDirectoryEntry(resolve))

export const pnpjsMonacoConfigs = () => {
  const COMMON_CONFIG: monaco.editor.IStandaloneEditorConstructionOptions = {
    lineNumbers: 'on',
    roundedSelection: true,
    scrollBeyondLastLine: false,
    readOnly: false,
    fontSize: 16,
    renderIndentGuides: true,
    suggestOnTriggerCharacters: true,
    colorDecorators: true,
    // automaticLayout: true,
  }
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  })
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES5,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    noEmit: true,
    // typeRoots: ['@pnp', '@microsoft'],
    allowSyntheticDefaultImports: true,
  })
  return COMMON_CONFIG
}

export const initCode = () => {
  const code = `
// CTRL/CMD + D to execute the code
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";

// wrapping the code inside self-excecuting async function
// enables you to use await expression
(async () => {

  const { Title } = await sp.web.select("Title")()
  console.log(\`Web title: \${Title}\`);

})().catch(console.log)
`
  return code.substring(code.indexOf('\n') + 1)
}

export const execme = (prepnp: string[], ecode: string[]) => {
  return `
var execme = function execme() {
  Promise.all([SystemJS.import(mod_common),SystemJS.import(mod_config),SystemJS.import(mod_graph),SystemJS.import(mod_logging),SystemJS.import(mod_odata),SystemJS.import(mod_pnpjs),SystemJS.import(mod_addin),SystemJS.import(mod_client),SystemJS.import(mod_sp),SystemJS.import(mod_taxonomy),SystemJS.import(mod_adaljs)]).then(function (modules) {
    ${prepnp.join('\n')}
    // Your code starts here
    // #####################
    ${ecode.map(e => '\t\t\t' + e).join('\n')}
    // #####################
    // Your code ends here
  });
};`
}

export const fixImports = (lines: string[], ecode: string[]) => {
  const prepnp: string[] = []
  lines.forEach(line => {
    // remove imports
    if (line.toLowerCase().indexOf('require(') === -1 && line.toLowerCase().indexOf('use strict') === -1 && line.toLowerCase().indexOf('__esmodule') === -1) {
      ecode.push(line)
    }
    if (line.toLowerCase().indexOf(' = require') > -1) {
      // fix imports
      const lineRe = line.match('var (.*) = require')
      let mod = -1
      mod = line.indexOf('@pnp/common') > -1 ? 0 : mod
      mod = line.indexOf('@pnp/config-store') > -1 ? 1 : mod
      mod = line.indexOf('@pnp/graph') > -1 ? 2 : mod
      mod = line.indexOf('@pnp/logging') > -1 ? 3 : mod
      mod = line.indexOf('@pnp/odata') > -1 ? 4 : mod
      mod = line.indexOf('@pnp/pnpjs') > -1 ? 5 : mod
      mod = line.indexOf('@pnp/sp-addinhelpers') > -1 ? 6 : mod
      mod = line.indexOf('@pnp/sp-clientsvc') > -1 ? 7 : mod
      mod = line.indexOf('@pnp/sp-taxonomy') > -1 ? 9 : mod
      mod = line.indexOf('@pnp/adaljsclient') > -1 ? 10 : mod
      mod = mod === -1 && line.indexOf('@pnp/sp') > -1 ? 8 : mod
      prepnp.push(`var ${lineRe![1]} = modules[${mod}];`)
    }
  })
  return prepnp
}

// find all import lines from code
export const getImportModules = (content: string) => {
  const importTexts: string[] = []
  const imports = content.match(/(import|from).*(@pnp|microsoft).*/g)
  if (imports) {
    imports.forEach(iText => {
      const match = iText.match(/(["'])(.*?[^\\])\1/g)
      if (match) {
        importTexts.push(match[0].replace(/"/g, '').replace(/'/g, ''))
      }
    })
  }
  return Array.from(new Set(importTexts))
}

// match filenames to definitions
export const resolveFiles = (files: string[], definitions: IDefinitions[]) => {
  const resolvedMods: IDefinitions[] = []
  if (files && files.length > 0) {
    files.forEach(file => {
      const modl = definitions.find(mod =>
        mod.filePath === file || mod.filePath === `${file}.d.ts` || mod.filePath === `${file}/index.d.ts`)
      if (modl) {
        resolvedMods.push(modl)
      }
    })
  }
  return resolvedMods
}

export const locations = (substringx: any, stringx: string) => {
  const indexes = Array.from(stringx.matchAll(new RegExp(substringx, 'gi'))).map(a => a.index)
  return indexes
}

export const getExportRows = (content: string, path: string) => {
  const libs = content.match(/("(\.|@)|'(\.|@)).*\/.*("|')/g)
  if (libs) {
    const exportTexts: string[] = []
    libs.forEach(eText => {
      const libo = eText.match(/(["'])(.*?[^\\])\1/g)
      if (libo) {
        const lib = libo[0].replace(/"/g, '').replace(/'/g, '')
        const splitIndex = locations('/', path)
        if (lib.startsWith('./')) {
          const jee = splitIndex[splitIndex.length - 1]
          if (jee) {
            const lib1 = path.substring(0, jee + 1) + lib.substring(2)
            exportTexts.push(lib1)
          }
        } else if (lib.startsWith('../../')) {
          const jee = splitIndex[splitIndex.length - 3]
          if (jee) {
            const lib2 = path.substring(0, jee + 1) + lib.substring(6)
            exportTexts.push(lib2)
          }
        } else if (lib.startsWith('../')) {
          const jee = splitIndex[splitIndex.length - 2]
          if (jee) {
            const lib3 = path.substring(0, jee + 1) + lib.substring(3)
            exportTexts.push(lib3)
          }
        } else {
          exportTexts.push(lib)
        }
      }
    })
    return exportTexts
  }
  else {
    return []
  }
}

export const getDefinitionsInUse = (codeWithOutComments: string, definitions: IDefinitions[]) => {
  const initModules = getImportModules(codeWithOutComments)
  const defs = resolveFiles(initModules, definitions)
  const currentLibs: IDefinitions[] = []
  const parseLibs = (filelist: IDefinitions[]) => {
    filelist.forEach((file) => {
      const libs = resolveFiles(getExportRows(file.content, file.filePath), definitions)
      if (libs && libs.length > 0) {
        const newLibs = libs.filter(d => !currentLibs.find(g => d.filePath === g.filePath))
        newLibs.forEach(lib => currentLibs.push(lib))
        parseLibs(newLibs)
      }
    })
    const initLibs = filelist.filter(file => !currentLibs.find(lib => file.filePath === lib.filePath))
    if (initLibs && initLibs.length > 0) {
      initLibs.forEach(lib => currentLibs.push(lib))
    }
  }
  parseLibs(defs)
  return currentLibs
}

export const mod_common = `var mod_common = '${chrome.extension.getURL('bundles/common.es5.umd.bundle.js')}';`
export const mod_config = `var mod_config = '${chrome.extension.getURL('bundles/config-store.es5.umd.bundle.js')}';`
export const mod_graph = `var mod_graph = '${chrome.extension.getURL('bundles/graph.es5.umd.bundle.js')}';`
export const mod_logging = `var mod_logging = '${chrome.extension.getURL('bundles/logging.es5.umd.bundle.js')}';`
export const mod_odata = `var mod_odata = '${chrome.extension.getURL('bundles/odata.es5.umd.bundle.js')}';`
export const mod_pnpjs = `var mod_pnpjs = '${chrome.extension.getURL('bundles/pnpjs.es5.umd.bundle.js')}';`
export const mod_addin = `var mod_addin = '${chrome.extension.getURL('bundles/sp-addinhelpers.es5.umd.bundle.js')}';`
export const mod_client = `var mod_client = '${chrome.extension.getURL('bundles/sp-clientsvc.es5.umd.bundle.js')}';`
export const mod_taxonomy = `var mod_taxonomy = '${chrome.extension.getURL('bundles/sp-taxonomy.es5.umd.bundle.js')}';`
export const mod_sp = `var mod_sp = '${chrome.extension.getURL('bundles/sp.es5.umd.bundle.js')}';`
export const mod_adaljs = `var mod_adaljs = '${chrome.extension.getURL('bundles/adaljsclient.es5.umd.bundle.js')}';`
export const sj = `var sj = '${chrome.extension.getURL('bundles/system.js')}';`
