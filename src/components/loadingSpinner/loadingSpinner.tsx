import React from "react";

import { Spinner, SpinnerSize, IStackProps, IStyle, Overlay, Stack } from "office-ui-fabric-react";

const LoadingSpinner = ({loading}: SpinnerProps) => {

    const stackProps: IStackProps = { verticalFill: true, verticalAlign: 'center' };

    interface IOverStyles {
        root: IStyle;
    };

    const overlayStyles: IOverStyles = {
        root: [
          {
            position: 'absolute',
            top: -56,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 10000,
          }
        ]
      };

    return (
        <React.Fragment>
            { loading && (
                <Overlay styles={overlayStyles} isDarkThemed={true}>
                <Stack {...stackProps} >
                    <Spinner size={SpinnerSize.large} />
                </Stack>
                </Overlay>)
            }
          </React.Fragment>
    );

};

interface SpinnerProps {
    loading: boolean;
};

export default LoadingSpinner;