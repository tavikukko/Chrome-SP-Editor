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

export const loadDeclarations = async (
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

export const getExtensionDirectory = (): Promise<DirectoryEntry> =>
new Promise(resolve => chrome.runtime.getPackageDirectoryEntry(resolve))
