import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import history from "./routes/history";
import { Provider } from "react-redux";
import { AppState } from "./store";
import { filterInitialState } from "./store/filter/reducer";

const initialState: AppState = {
  magic: { loading: false, magics: [], descriptors: [], magicCircle: [] },
  favorites: { favorites: [] },
  filter: filterInitialState
};

let favoriteStorage = localStorage.getItem("favorites");
if (typeof favoriteStorage === "string") {
  initialState.favorites = JSON.parse(favoriteStorage);
}

const store = configureStore(history, initialState);

store.subscribe(() => {
  localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));
});

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
