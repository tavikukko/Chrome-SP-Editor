import { IStackProps, IStyle, Overlay, Spinner, SpinnerSize, Stack } from 'office-ui-fabric-react'
import React from 'react'

const LoadingSpinner = ({ loading, isDarkThemed }: SpinnerProps) => {

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
        <Overlay styles={overlayStyles} isDarkThemed={isDarkThemed ? isDarkThemed : false}>
          <Stack {...stackProps} >
            <Spinner size={SpinnerSize.large} />
          </Stack>
        </Overlay>)
      }
    </>
  )
}

interface SpinnerProps {
  loading: boolean
  isDarkThemed?: boolean
}

export default LoadingSpinner
