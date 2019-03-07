import React, { Component } from "react";
import Filtro from "../components/Filtro";
import { Container, Row, Col } from "reactstrap";
import MagiaList from "../components/MagiaList";
import PropTypes from 'prop-types';

class Home extends Component {
  // Filtros deNome, niveis (círculo/nivel),
  state = {
    nameFilter: "",
    levelsFilter: [],
    circulosFilter: [],
    favoritesOnly: false
  };

  onSearchChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onMultiChoiceChange = (name, values) => {
    this.setState({ [name]: values });
  };

  render() {
    const {
      nameFilter,
      levelsFilter,
      circulosFilter,
      favoritesOnly
    } = this.state;

    const { listaMagia, favorites, addToFav, removeFav } = this.props;
    return (
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Filtro
              onMultiChoiceChange={this.onMultiChoiceChange}
              nameFilter={nameFilter}
              handleChange={this.onSearchChange}
              favoritesOnly={favoritesOnly}
            />
          </Col>
          <Col xs="12" md="6">
            <MagiaList
              levelsFilter={levelsFilter}
              circulosFilter={circulosFilter}
              nameFilter={nameFilter}
              favoritesOnly={favoritesOnly}
              listaMagia={listaMagia}
              favorites={favorites}
              addToFav={addToFav}
              removeFav={removeFav}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
  listaMagia: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired
}

export default Home;
