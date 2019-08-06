import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav } from 'office-ui-fabric-react';

export const FabricNav = withRouter(({ history }) => (
  <Nav
    onLinkClick={(event, element) => {
      if (event && element) {
        event.preventDefault();
        history.push(element.url);
      }
    }}
    selectedKey="key3"
    expandButtonAriaLabel="Expand or collapse"
    selectedAriaLabel="Selected"
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
    ]} />
));
