import { IonContent, IonPage } from '@ionic/react'
import {
  Selection,
} from 'office-ui-fabric-react/lib/utilities/selection'
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner'
import Header from '../../components/navigation/header'
import { IRootState } from '../../store'
import { getAllScriptLinks } from '../../store/scriptlinks/async-actions'
import { IScriptLink, ScriptLinksActions } from '../../store/scriptlinks/types'
import Commands from './commands/commands'
import EditPanel from './editpanel/editpanel'
import NewPanel from './newpanel/newpanel'
import ScriptLinkList from './scriptLinkList/scriptLinkList'

const ScriptLinks = ({ scriptlinks, scriptLinks, loading }: ScriptLinksProps) => {
  /* component props */
  const [showItemPanel, setShowItemPanel] = useState(false)
  const [showNewPanel, setShowNewPanel] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IScriptLink | undefined>()
  const [selectedItems, setSelectedItems] = useState<IScriptLink[] | []>([])

  const selection = useRef(new Selection({
    onSelectionChanged: () => {
      const newSelection = selection.current.getSelection() as typeof selectedItems
      setSelectedItems(newSelection)
    },
  }))

  // load initial data
  useEffect(() => {
    scriptLinks()
  }, [])

  return (
    <>
      <IonPage>
        <Header title={'ScriptLinks'} />
        <IonContent>
          {/* Loading spinner overlay */}
          <LoadingSpinner loading={loading} />
          {/* Actions menu */}
          <Commands selectedItems={selectedItems} setShowNewPanel={setShowNewPanel} />
          {/* List of scriptLinks */}
          <ScriptLinkList scriptLinks={scriptlinks} selectionRef={selection} setSelectedItem={setSelectedItem} setShowItemPanel={setShowItemPanel} />
        </IonContent>
      </IonPage>

      {/* Panel item details */}
      {selectedItem && <EditPanel showEditPanel={showItemPanel} setSelectedItem={setSelectedItem} setShowEditPanel={setShowItemPanel} selectedItem={selectedItem} />}
      {/* Panel to create new item */}
      <NewPanel showNewPanel={showNewPanel} setShowNewPanel={setShowNewPanel} />
    </>
  )
}

/* types & redux */
const mapStateToProps = ({ scriptLinks }: IRootState) => ({
  scriptlinks: scriptLinks.scriptlinks,
  loading: scriptLinks.loading,
})

const mapDispatchToProps = (dispatch: Dispatch<ScriptLinksActions>) => ({
  scriptLinks: () => getAllScriptLinks(dispatch),
})

type ScriptLinksProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScriptLinks)
