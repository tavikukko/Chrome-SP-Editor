import React, { useState } from "react";

/* redux imports */
import { connect } from "react-redux";
import { IRootState } from "../../store/index";
import { Dispatch } from "redux";
import { HomeActions } from "../../store/home/types";
import { addItemAsync } from "../../store/home/async-actions";

/* UI imports */
import { PrimaryButton, TextField } from "office-ui-fabric-react";
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import Header from "../../components/navigation/header";

/* component */
const HomePage = ({ list, loading, addItem }: HomeProps) => {

  /* component props */
  const [inputText, setInputText] = useState();

  /* compoent methods */
  const onInputChange = (newValue?: string) => {
    setInputText(newValue);
  };

  const onAddClick = () => {
    addItem(inputText);
    setInputText("");
  };
  const greeting = 'Welcome to React';
  /* render */
  return (
    <>
      <IonPage>
        <Header title={'Home'} />
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <TextField
                  label="Standard"
                  value={inputText}
                  onChange={(e, v) => onInputChange(v)}
                />
                <PrimaryButton text="Add item" onClick={onAddClick} />
                <ul>
                  {list.map(l => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                {loading && <div>Loading...</div>}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

/* types & redux */
const mapStateToProps = ({ home }: IRootState) => ({
  list: home.list,
  loading: home.loading
});

const mapDispatchToProps = (dispatch: Dispatch<HomeActions>) => ({
  addItem: (item: string) => addItemAsync(dispatch, item)
});

type HomeProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
