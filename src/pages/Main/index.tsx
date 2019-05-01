import React, { Component } from "react";
import MagicList from "../../components/MagicList/index";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { fetchRequest as magicRequest } from "../../store/magic/actions";

interface StateProps {
  magicRequest: () => void;
}

class Main extends Component<StateProps> {
  componentWillMount() {
    this.props.magicRequest();
  }
  render() {
    return (
      <div>
        <MagicList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      magicRequest
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Main);
