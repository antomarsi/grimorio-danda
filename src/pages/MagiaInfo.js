import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CardTitle, Card, CardBody } from "reactstrap";

class MagiaInfo extends Component {
  state = {
    magia: null
  };

  componentWillMount() {
    const {
      history,
      listaMagia,
      match: {
        params: { magicId }
      }
    } = this.props;
    const magia = listaMagia.find(x => x.id === Number.parseInt(magicId));
    if (!magia) {
      history.push("/404");
    }

    this.setState({ magia });
  }

  render() {
    const { magia } = this.state;
    if (!magia) return <div />;
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <h3>{magia.nome}</h3>
          </CardTitle>
          <dl className="row">
            <dt className="col-sm-3">Niveis</dt>
            <dd className="col-sm-9">
              {magia.niveis.map((nivel, index) => (
                <p key={index}>
                  {nivel.circulo} {nivel.nivel}{" "}
                  {magia.descritores[index] &&
                    `(${magia.descritores[index].descritor})`}
                </p>
              ))}
            </dd>
            <dt className="col-sm-3">Descritores</dt>
            <dd className="col-sm-9">
              {magia.descritores.map((descritor, index) => (
                <p key={index}>{descritor.descritor}</p>
              ))}
            </dd>
            {magia.tempoExecucao && (
              <dt className="col-sm-3">Tempo de execução</dt>
            )}
            {magia.tempoExecucao && (
              <dd className="col-sm-9">{magia.tempoExecucao}</dd>
            )}
            {magia.alcance && <dt className="col-sm-3">Alcance</dt>}
            {magia.alcance && <dd className="col-sm-9">{magia.alcance}</dd>}
            {magia.alvo && <dt className="col-sm-3">Alvo</dt>}
            {magia.alvo && <dd className="col-sm-9">{magia.alvo}</dd>}
            {magia.area && <dt className="col-sm-3">Area</dt>}
            {magia.area && <dd className="col-sm-9">{magia.area}</dd>}
            {magia.efeito && <dt className="col-sm-3">Efeito</dt>}
            {magia.efeito && <dd className="col-sm-9">{magia.efeito}</dd>}
            {magia.duracao && <dt className="col-sm-3">Duração</dt>}
            {magia.duracao && <dd className="col-sm-9">{magia.duracao}</dd>}
            {magia.testeResistencia && (
              <dt className="col-sm-3">Teste de Resistência</dt>
            )}
            {magia.testeResistencia && (
              <dd className="col-sm-9">{magia.testeResistencia}</dd>
            )}
            {magia.componenteMaterial && (
              <dt className="col-sm-3">Componente material</dt>
            )}
            {magia.componenteMaterial && (
              <dd className="col-sm-9">{magia.componenteMaterial}</dd>
            )}
            {magia.custoXP && <dt className="col-sm-3">Custo de XP</dt>}
            {magia.custoXP && <dd className="col-sm-9">{magia.custoXP}</dd>}
          </dl>
          <p className="h4">Descrição</p>
          <p dangerouslySetInnerHTML={{ __html: magia.descricao }} />
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(MagiaInfo);
