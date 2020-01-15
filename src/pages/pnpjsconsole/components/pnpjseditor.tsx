/// <reference types='../../../../node_modules/monaco-editor/monaco' />

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CompilerOptions,
  getDefaultCompilerOptions,
  transpileModule,
} from 'typescript'
import { IRootState } from '../../../store'
import { setLoading } from '../../../store/home/actions'
import { setCode } from '../../../store/pnpjsconsole/actions'
import { fetchDefinitions } from '../../../store/pnpjsconsole/async-actions'
import { exescript } from '../../../store/utilities/chromecommon'
import {
  execme,
  fixImports,
  mod_adaljs,
  mod_addin,
  mod_client,
  mod_common,
  mod_config,
  mod_graph,
  mod_logging,
  mod_odata,
  mod_pnpjs,
  mod_sp,
  mod_taxonomy,
  pnpjsMonacoConfigs,
  sj,
} from './utils'

const PnPjsEditor = () => {
  const dispatch = useDispatch()
  const [ initialized, setInitialized ] = useState(false)
  const { definitions, code } = useSelector((state: IRootState) => state.pnpjsconsole)
  const stateCode = code
  const editor = useRef<null | monaco.editor.IStandaloneCodeEditor>(null)
  const outputDiv = useRef<null | HTMLDivElement>(null)

  const { isDark } = useSelector((state: IRootState) => state.home)

  const COMMON_CONFIG: monaco.editor.IStandaloneEditorConstructionOptions = pnpjsMonacoConfigs()

  const initEditor = useCallback(() => {
    if (outputDiv.current) {
      editor.current = monaco.editor.create(outputDiv.current, {
        model: monaco.editor.createModel(
          stateCode,
          'typescript',
          // @ts-ignore: this is the only way to make it work
          new monaco.Uri('index.ts'),
        ),
        ...COMMON_CONFIG,
      })
      if (editor && editor.current) {

        editor.current.onDidChangeModelContent((x) => {
          const model = editor.current!.getModel()!.getValue()
          dispatch(setCode(model))
        })

        // tslint:disable-next-line:no-bitwise
        editor.current.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, () => {
          try {
            const model = editor.current!.getModel()!.getValue()

            const compilerOptions: CompilerOptions = getDefaultCompilerOptions()
            const js = transpileModule(model, {
              compilerOptions,
            })

            console.log(js)
            const lines = js.outputText.split('\n')
            const ecode: string[] = []
            const prepnp: string[] = fixImports(lines, ecode)

            ecode.pop() // remove the last empty line

            const script = `
            ${mod_common}
            ${mod_config}
            ${mod_graph}
            ${mod_logging}
            ${mod_odata}
            ${mod_pnpjs}
            ${mod_addin}
            ${mod_client}
            ${mod_sp}
            ${mod_taxonomy}
            ${mod_adaljs}
            ${sj}
            ${exescript}
            ${execme(prepnp, ecode)}
            exescript(execme);`

            console.log(script)

            // execute the code
            chrome.devtools.inspectedWindow.eval(script)
            // show loading for a sec to make user know the code is being executed
            dispatch(setLoading(true))
            setTimeout(() => { dispatch(setLoading(false)) }, 1200)

          } catch (e) {
            console.log(e)
          }

        })
      }
    }
  }, [COMMON_CONFIG, dispatch, stateCode])

  // this will run always when the isDark changes
  useEffect(() => {
    monaco.editor.setTheme(isDark ? 'vs-dark' : 'vs')
  }, [isDark])

  // this will run when the compunent unmounts
  useEffect(() => {
    return () => {
      // cleaning models
      monaco.editor.getModels().forEach(model => model.dispose())
    }
  }, [])

  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      definitions.length > 0 ? initEditor() : fetchDefinitions(dispatch).then(initEditor)
    }
  }, [definitions, dispatch, initEditor, initialized, outputDiv])

  return (
    <div ref={outputDiv} style={{ width: '100%', height: '100%' }} />
  )
}

export default PnPjsEditor
