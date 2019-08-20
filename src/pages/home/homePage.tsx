import React from "react";
import { connect } from "react-redux";
import { IRootState } from "../../store/index";
import { Dispatch } from "redux";
import { HomeActions } from "../../store/home/types";
import { addItemAsync } from "../../store/home/async-actions";
import { PrimaryButton, TextField } from "office-ui-fabric-react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent
} from "@ionic/react";

const mapStateToProps = ({ home }: IRootState) => ({
  list: home.list,
  loading: home.loading
});

const mapDispatcherToProps = (dispatch: Dispatch<HomeActions>) => ({
  addItem: (item: string) => addItemAsync(dispatch, item)
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;

interface IHomeState {
  inputText: string;
}

class HomePage extends React.Component<Props, IHomeState> {
  public state: IHomeState = {
    inputText: ""
  };

  private onInputChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({ inputText: newValue || "" });
  };

  private onAddClick = () => {
    this.props.addItem(this.state.inputText);
    this.setState({ inputText: "" });
  };

  public render() {
    const { list, loading } = this.props;

    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonMenuButton slot="start" />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <TextField
            label="Standard"
            value={this.state.inputText}
            onChange={this.onInputChange}
          />
          <PrimaryButton text="Add item" onClick={this.onAddClick} />
          <ul>
            {list.map(l => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          {loading && <div>Loading...</div>}
        </IonContent>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(HomePage);
