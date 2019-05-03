import React from "react";
import MagicList from "../../components/MagicList/index";
import { Row } from "antd";
import FilterForm from "../../components/FilterForm";

interface StateProps {
  magicRequest: () => void;
}

const Main: React.SFC<StateProps> = () => (
  <div>
    <Row>
      <FilterForm />
    </Row>
    <Row>
      <MagicList />
    </Row>
  </div>
);

export default Main;
