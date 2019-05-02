import React, { Component } from "react";
import MagicList from "../../components/MagicList/index";
import { Row } from "antd";
import FilterForm from "../../components/FilterForm";
import { connect } from "react-redux";

interface StateProps {
  magicRequest: () => void;
}

class Main extends Component<StateProps> {
  render() {
    return (
      <div>
        <Row>
          <FilterForm />
        </Row>
        <Row>
          <MagicList />
        </Row>
      </div>
    );
  }
}

export default connect()(Main);
