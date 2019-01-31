import React, { Component } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MagiaInfo from "./pages/MagiaInfo";
import magias from "./data/magias.json";

class App extends Component {
  state = {
    magias: [],
    favorites: []
  };

  componentWillMount() {
    if (localStorage.favorites) {
      this.setState({
        magias: magias,
        favorites: JSON.parse(localStorage.favorites)
      });
    } else {
      this.setState({ magias });
    }
  }
  addToFav(id) {
    if (!this.state.favorites.includes(id)) {
      this.setState({ favorites: [...this.state.favorites, id] }, () =>
        this.saveFav()
      );
    }
  }
  removeFav(id) {
    if (this.state.favorites.includes(id)) {
      this.setState(
        { favorites: this.state.favorites.filter(fav => fav !== id) },
        () => this.saveFav()
      );
    }
  }

  saveFav() {
    if (this.state.favorites) {
      localStorage.favorites = JSON.stringify(this.state.favorites);
    }
  }

  render() {
    const { magias, favorites } = this.state;
    return (
      <div>
        <Topbar />
        <main role="main">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  listaMagia={magias}
                  favorites={favorites}
                  addToFav={id => this.addToFav(id)}
                  removeFav={id => this.removeFav(id)}
                />
              )}
            />
            <Route
              exact
              path="/:magicId(\d+)/*"
              render={props => <MagiaInfo {...props} listaMagia={magias} />}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
