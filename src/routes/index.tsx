import React from "react";
import { Switch, Route, RouteProps, HashRouter } from "react-router-dom";
import Main from "../pages/Main";
import { Location } from "history";
import { ConnectedRouter, RouterState } from "connected-react-router";
import history from "./history";
import { useSelector } from "react-redux";
import { AppState } from "../store/index";

interface OwnProps {}

type Props = OwnProps & RouteProps;

const Routes: React.FC<Props> = (props: Props) => {
  const location = useSelector(
    (state: AppState) => (state.router as RouterState).location
  );
  return (
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/magic/:id/:title" component={Main} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  );
};

export default Routes;
