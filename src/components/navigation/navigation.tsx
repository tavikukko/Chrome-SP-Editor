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
                  key: 'key1',
                },
                {
                  name: 'Script links',
                  url: '/scriptlinks',
                  key: 'key3',
                },
                {
                  name: 'Files',
                  url: '/files',
                  key: 'key4',
                },
                {
                  name: 'Web properties',
                  url: '/webproperties',
                  key: 'key5',
                },
                {
                  name: 'List properties',
                  url: '/listproperties',
                  key: 'key6',
                },
                {
                  name: 'Webhooks',
                  url: '/webhooks',
                  key: 'key7',
                },
                {
                  name: 'PnP JS Console',
                  url: '/pnpjsconsole',
                  key: 'key8',
                },
                {
                  name: 'Search',
                  url: '/search',
                  key: 'key9',
                },
                {
                  name: 'Page editor',
                  url: '/pageeditor',
                  key: 'key10',
                },
                {
                  name: 'File editor',
                  url: '/fileeditor',
                  key: 'key11',
                },
                {
                  name: 'Modern properties',
                  url: '/modernproperties',
                  key: 'key12',
                },
                {
                  name: 'Site designs',
                  url: '/sitedesigns',
                  key: 'key13',
                },
                {
                  name: 'Site scripts',
                  url: '/sitescripts',
                  key: 'key14',
                },
                {
                  name: 'App catalog',
                  url: '/appcatalog',
                  key: 'key15',
                }
              ]
            }
          ]}
        />
    )
  }
}

export const FabricNav = withRouter(fabricNav);
