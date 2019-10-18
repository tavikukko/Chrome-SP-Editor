import { createTheme } from 'office-ui-fabric-react/lib/Styling'
import { ICustomizations } from 'office-ui-fabric-react/lib/Utilities'
export const fabricDark: ICustomizations = {
  settings: {
    theme: createTheme({
      palette: {
        neutralLighterAlt: '#282828',
        neutralLighter: '#313131',
        neutralLight: '#3f3f3f',
        neutralQuaternaryAlt: '#484848',
        neutralQuaternary: '#4f4f4f',
        neutralTertiaryAlt: '#6d6d6d',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#1f1f1f',
        themePrimary: '#3a96dd',
        themeLighterAlt: '#020609',
        themeLighter: '#091823',
        themeLight: '#112d43',
        themeTertiary: '#235a85',
        themeSecondary: '#3385c3',
        themeDarkAlt: '#4ba0e1',
        themeDark: '#65aee6',
        themeDarker: '#8ac2ec',
        accent: '#3a96dd',
      },
    }),
  },
  scopedSettings: {},
}

export const fabricDefault: ICustomizations = {
  settings: {
    theme: createTheme({
      palette: {
        themePrimary: '#0078d4',
        themeLighterAlt: '#eff6fc',
        themeLighter: '#deecf9',
        themeLight: '#c7e0f4',
        themeTertiary: '#71afe5',
        themeSecondary: '#2b88d8',
        themeDarkAlt: '#106ebe',
        themeDark: '#005a9e',
        themeDarker: '#004578',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#c2c2c2',
        neutralSecondary: '#858585',
        neutralPrimaryAlt: '#4b4b4b',
        neutralPrimary: '#333333',
        neutralDark: '#272727',
        black: '#1d1d1d',
        white: '#ffffff',
      },
    }),
  },
  scopedSettings: {},
}
