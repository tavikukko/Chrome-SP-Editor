import React from "react"
import { withRouter, RouteComponentProps } from "react-router"
import { Nav } from "office-ui-fabric-react"

interface IState {
  readonly selectedKey: string | any
}

class fabricNav extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props)

    this.state = {
      selectedKey: "key1",
    }
  }

  render() {
    const { selectedKey } = this.state
    return (
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
    )
  }
}

export const FabricNav = withRouter(fabricNav);
