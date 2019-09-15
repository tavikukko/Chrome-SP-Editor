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
import { Stack, TextField } from "office-ui-fabric-react";
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import Header from "../../components/navigation/header";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "../../store";
import { useState } from "react";

const originalItems: IScriptLinks[] = [];

export interface IScriptLinks {
  [key: string]: any;
  path: string;
  sequence: number;
  scope: string;
}

const ScriptLinks = ({ filteredItems }: HomeProps) => {
  /* component props */
  const [showItemPanel, setShowItemPanel] = useState(false);
  const [showNewPanel, setShowNewPanel] = useState(false);

  //  Populate filteredItems.
  if (originalItems.length === 0) {
    for (let i = 0; i < 10; i++) {
      originalItems.push({
        path: "~sitecollection/Style Library/Valo/riot.min.js?v=1.17",
        sequence: i + 10000,
        scope: i % 2 == 0 ? "Site Collection" : "Current Web"
      });
    }
  }

  // Populate columns
  const detailsListColumns: IColumn[] = [
    {
      data: "number",
      fieldName: "sequence",
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
      fieldName: "path",
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

  const _onRenderItemFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton
          onClick={() => setShowItemPanel(false)}
          style={{ marginRight: "8px" }}
        >
          Update
        </PrimaryButton>
        <DefaultButton onClick={() => setShowItemPanel(false)}>
          Remove
        </DefaultButton>
      </div>
    );
  };

  const _onRenderNewFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton
          onClick={() => setShowNewPanel(false)}
          style={{ marginRight: "8px" }}
        >
          Add
        </PrimaryButton>
      </div>
    );
  };

  return (
    <>
      <IonPage>
        <Header title={"ScriptLinks"} />
        <IonContent>
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
                      onClick: () => setShowNewPanel(true)
                    }
                  ]}
                  overflowButtonProps={{ ariaLabel: "More commands" }}
                  ariaLabel={
                    "Use left and right arrow keys to navigate between commands"
                  }
                />
                <DetailsList
                  items={originalItems}
                  columns={detailsListColumns}
                  selectionMode={SelectionMode.none}
                  setKey="set"
                  layoutMode={DetailsListLayoutMode.justified}
                  isHeaderVisible={true}
                  enterModalSelectionOnTouch={true}
                  onItemInvoked={() => setShowItemPanel(true)}
                />
        </IonContent>
      </IonPage>

      {/* Panel to item details */}
      <Panel
        isOpen={showItemPanel}
        type={PanelType.smallFixedFar}
        onDismiss={() => setShowItemPanel(false)}
        isLightDismiss={true}
        isFooterAtBottom={true}
        headerText="Panel with footer at bottom"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={_onRenderItemFooterContent}
      />

      {/* Panel to create new item */}
      <Panel
        isOpen={showNewPanel}
        type={PanelType.smallFixedFar}
        onDismiss={() => setShowNewPanel(false)}
        isLightDismiss={true}
        isFooterAtBottom={true}
        headerText="Panel with footer at bottom"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={_onRenderNewFooterContent}
      >
        {/* Panel form */}
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
};

/* types & redux */
const mapStateToProps = ({ home }: IRootState) => ({
  filteredItems: home.list,
  loading: home.loading
});

const mapDispatchToProps = (/*dispatch: Dispatch<HomeActions>*/) => ({
  // addItem: (item: string) => addItemAsync(dispatch, item)
});

type HomeProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScriptLinks);
