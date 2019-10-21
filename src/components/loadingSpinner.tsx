import {
  IStackProps,
  IStyle,
  Overlay,
  Spinner,
  SpinnerSize,
  Stack,
} from 'office-ui-fabric-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../store'

const LoadingSpinner = () => {

  const { loading, isDark } = useSelector((state: IRootState) => state.home)

  const stackProps: IStackProps = { verticalFill: true, verticalAlign: 'center' }

  interface IOverStyles {
    root: IStyle
  }

  const overlayStyles: IOverStyles = {
    root: [
      {
        position: 'absolute',
        top: -56,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10000,
      },
    ],
  }

  return (
    <>
      {loading && (
        <Overlay styles={overlayStyles} isDarkThemed={isDark}>
          <Stack {...stackProps} >
            <Spinner size={SpinnerSize.large} />
          </Stack>
        </Overlay>)
      }
    </>
  )
}

export default LoadingSpinner
