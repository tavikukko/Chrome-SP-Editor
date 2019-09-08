import * as React from "react";

import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode
} from "office-ui-fabric-react/lib/DetailsList";

import {
  DefaultButton,
  PrimaryButton
} from "office-ui-fabric-react/lib/Button";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import {
  Stack,
  TextField,
} from "office-ui-fabric-react";
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import MyHeader from "../../components/navigation/header";

const originalItems: IDocument[] = [];

export interface IDocument {
  [key: string]: any;
  name: string;
  nameId: number;
}

interface IAppState {
  // In filter text box if we type "a" then show only those items which contain "a"
  filteredItems: IDocument[];
  // we need to know if the column is to be sorted in ascending or descending
  detailsListColumns: IColumn[];
  showItemPanel: boolean;
  showNewPanel: boolean;
}

class ScriptLinks extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    //  Populate filteredItems.
    if (originalItems.length === 0) {
      for (let i = 0; i < 10; i++) {
        originalItems.push({
          name: "~sitecollection/Style Library/Valo/riot.min.js?v=1.17",
          nameId: i + 10000,
          scope: i % 2 == 0 ? "Site Collection" : "Current Web"
        });
      }
    }

    // Populate columns
    const detailsListColumns = [
      {
        data: "number",
        fieldName: "nameId",
        isPadded: true,
        isResizable: true,
        isRowHeader: true,
        isSorted: true,
        isSortedDescending: false,
        key: "column2",
        maxWidth: 100,
        minWidth: 100,
        name: "Sequence"
      },
      {
        data: "string",
        fieldName: "name",
        isPadded: true,
        isResizable: true,
        isRowHeader: true,
        isSorted: true,
        isSortedDescending: false,
        key: "column1",
        maxWidth: 350,
        minWidth: 210,
        name: "Path"
      },
      {
        data: "string",
        fieldName: "scope",
        isPadded: true,
        isResizable: true,
        isRowHeader: true,
        isSorted: true,
        isSortedDescending: false,
        key: "column3",
        maxWidth: 350,
        minWidth: 210,
        name: "Scope"
      }
    ];
    this.state = {
      detailsListColumns,
      filteredItems: originalItems,
      showItemPanel: false,
      showNewPanel: false
    };
  }

  public render(): JSX.Element {
    const { detailsListColumns, filteredItems } = this.state;

    return (
      <>
        <IonPage>
          <MyHeader />
          <IonContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <CommandBar
                    items={[
                      {
                        key: "newItem",
                        name: "New",
                        cacheKey: "myCacheKey", // changing this key will invalidate this items cache
                        iconProps: {
                          iconName: "Add"
                        },
                        ariaLabel: "New",
                        onClick: this._showNewPanel
                      }
                    ]}
                    overflowButtonProps={{ ariaLabel: "More commands" }}
                    ariaLabel={
                      "Use left and right arrow keys to navigate between commands"
                    }
                  />
                  <DetailsList
                    items={filteredItems}
                    columns={detailsListColumns}
                    selectionMode={SelectionMode.single}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    enterModalSelectionOnTouch={true}
                    onItemInvoked={this._showItemPanel}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>

        <Panel
          isOpen={this.state.showItemPanel}
          type={PanelType.smallFixedFar}
          onDismiss={this._hideItemPanel}
          isLightDismiss={true}
          isFooterAtBottom={true}
          headerText="Panel with footer at bottom"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this._onRenderItemFooterContent}
        />
        <Panel
          isOpen={this.state.showNewPanel}
          type={PanelType.smallFixedFar}
          onDismiss={this._hideNewPanel}
          isLightDismiss={true}
          isFooterAtBottom={true}
          headerText="Panel with footer at bottom"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this._onRenderNewFooterContent}
        >
          <Stack>
            <TextField
              label="Custom label rendering"
              description="Click the (i) icon!"
            />

            <TextField
              label="Custom description rendering"
              description="A colorful description!"
            />
          </Stack>
        </Panel>
      </>
    );
  }
  private _onRenderItemFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton
          onClick={this._hideItemPanel}
          style={{ marginRight: "8px" }}
        >
          Update
        </PrimaryButton>
        <DefaultButton onClick={this._hideItemPanel}>Remove</DefaultButton>
      </div>
    );
  };

  private _onRenderNewFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton
          onClick={this._hideNewPanel}
          style={{ marginRight: "8px" }}
        >
          Add
        </PrimaryButton>
      </div>
    );
  };

  private _showItemPanel = () => {
    this.setState({ showItemPanel: true });
  };

  private _hideItemPanel = () => {
    this.setState({ showItemPanel: false });
  };

  private _showNewPanel = () => {
    this.setState({ showNewPanel: true });
  };

  private _hideNewPanel = () => {
    this.setState({ showNewPanel: false });
  };
}

export default ScriptLinks;
