import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";

interface OwnProps {}

const Routes: React.FC<OwnProps> = (props: OwnProps) => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/teste" component={Main} />
  </Switch>
);

export default Routes;
