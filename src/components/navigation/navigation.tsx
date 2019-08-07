import React from "react"
import { withRouter, RouteComponentProps } from "react-router"
import { Nav } from "office-ui-fabric-react"

interface IProps {
  className: string
}

type Props = IProps & RouteComponentProps<{}>

interface IState {
  readonly selectedKey: string | any
}

class fabricNav extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props)

    this.state = {
      selectedKey: "key1",
    }
  }

  render() {
    const { selectedKey } = this.state
    return (
      <div className={this.props.className}>
        <Nav
          selectedKey={selectedKey}
          onLinkClick={(event, element) => {
            if (event && element) {
              event.preventDefault()
              this.props.history.push(element.url);
              this.setState({ ...this.state, selectedKey: element.key })
            }
          }}
          groups={[
            {
              links: [
                {
                  name: 'Home',
                  url: '/',
                  icon: 'News',
                  key: 'key1',
                },
                {
                  name: 'Editor',
                  url: '/editor',
                  icon: 'News',
                  key: 'key2',
                }
              ]
            }
          ]}
        />
      </div>
    )
  }
}

export const FabricNav = withRouter(fabricNav);
