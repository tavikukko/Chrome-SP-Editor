export function getSystemjsPath(): string {
  return `var sj = '${chrome.extension.getURL('bundles/system.js')}';`
}
export function getPnpjsPath(): string {
  return `var speditorpnp = '${chrome.extension.getURL('bundles/pnpjs.es5.umd.bundle.js')}';`
}
