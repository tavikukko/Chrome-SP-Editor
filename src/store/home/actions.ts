import { ICustomizations } from 'office-ui-fabric-react'
import { action } from 'typesafe-actions'
import { Constants, IAppMessage } from './types'

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading,
  })
}

export function setDarkMode(isDark: boolean) {
  return action(Constants.SET_DARK_MODE, {
    isDark,
  })
}

export function setAppMessage(appMessage: IAppMessage) {
  return action(Constants.SET_APP_MESSAGE, {
    appMessage,
  })
}

export function setTheme(theme: ICustomizations) {
  return action(Constants.SET_THEME, {
    theme,
  })
}
