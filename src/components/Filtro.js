import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { DebounceInput } from "react-debounce-input";
import './Filtro.css';

class Filtro extends Component {
  state = {
    levelsFilter: [
      { name: 0, isChecked: false },
      { name: 1, isChecked: false },
      { name: 2, isChecked: false },
      { name: 3, isChecked: false },
      { name: 4, isChecked: false },
      { name: 5, isChecked: false }
    ],
    circulosFilter: [
      { name: "Abjuração", isChecked: false },
      { name: "Adivinhação", isChecked: false },
      { name: "Encantamento", isChecked: false },
      { name: "Evocação", isChecked: false },
      { name: "Etérea", isChecked: false },
      { name: "Solar", isChecked: false },
      { name: "Lunar", isChecked: false },
      { name: "Transmutação", isChecked: false },
      { name: "Tempo&Espaço", isChecked: false }
    ]
  };

  onChangeMultiChoice(stateName, name) {
    let newData = this.state[stateName].map(l => {
      if (l.name === name) {
        l.isChecked = !l.isChecked;
      }
      return l;
    });
    this.setState(
      { [stateName]: newData },
      this.props.onMultiChoiceChange(
        stateName,
        this.state[stateName].filter(l => l.isChecked).map(l => l.name)
      )
    );
  }

  resetFilter() {
    this.props.handleChange({
      target: { type: "checkbox", name: "favoritesOnly", checked: false }
    });
    this.props.handleChange({ target: { name: "nameFilter", value: "" } });
    this.setState(
      {
        levelsFilter: this.state.levelsFilter.map(l => {
          l.isChecked = false;
          return l;
        }),
        circulosFilter: this.state.circulosFilter.map(c => {
          c.isChecked = false;
          return c;
        })
      },
      () => {
        this.props.onMultiChoiceChange("levelsFilter", []);
        this.props.onMultiChoiceChange("circulosFilter", []);
      }
    );
  }

  render() {
    const { nameFilter, favoritesOnly } = this.props;

    return (
      <Card className="filtro">
        <CardBody>
          <CardTitle>
            <h2>
              Filtro
              <Button
                className={"float-right"}
                onClick={() => this.resetFilter()}
                color="primary"
              >
                Reset
              </Button>
            </h2>
          </CardTitle>
          <Form>
            <FormGroup>
              <Label for="nameFilter">Nome</Label>
              <DebounceInput
                element={Input}
                value={nameFilter}
                name="nameFilter"
                id="nameFilter"
                debounceTimeout={300}
                onChange={e => this.props.handleChange(e)}
              />
            </FormGroup>
            <hr />
            <FormGroup>
              <Label for="levelsFilter">Nível</Label>
              <br />
              {this.state.levelsFilter.map(n => (
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={n.isChecked}
                    id={`nivel_${n.name}`}
                    onChange={() =>
                      this.onChangeMultiChoice("levelsFilter", n.name)
                    }
                  />
                  <label className="form-check-label" for={`nivel_${n.name}`}>
                    {n.name}
                  </label>
                </div>
              ))}
            </FormGroup>
            <hr />
            <FormGroup>
              <Label for="circulosFilter">Círculo</Label>
              <br />
              {this.state.circulosFilter.map(n => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={n.isChecked}
                    id={`nivel_${n.name}`}
                    onChange={() =>
                      this.onChangeMultiChoice("circulosFilter", n.name)
                    }
                  />
                  <label className="form-check-label" for={`nivel_${n.name}`}>
                    {n.name}
                  </label>
                </div>
              ))}
            </FormGroup>
            <hr />
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="favoritesOnly"
                  id="favoritesOnly"
                  value={favoritesOnly}
                  onChange={e => this.props.handleChange(e)}
                />{" "}
                Somente Favoritos
              </Label>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default Filtro;
