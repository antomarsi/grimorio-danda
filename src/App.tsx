import React, { Component } from "react";
import "antd/dist/antd.css";
import "rpg-awesome/css/rpg-awesome.min.css";
import Routes from "./routes/index";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import { Layout, BackTop, Icon } from "antd";
import Navbar from "./components/Navbar";
import { HashRouter } from "react-router-dom";
import { fetchRequest } from "./store/magic/thunk";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar";
const { Content, Footer } = Layout;

interface AppProps {
  history: History;
}

interface DispatchProps {
  magicRequest: () => void;
}

type Props = AppProps & DispatchProps;

class App extends Component<Props> {
  componentWillMount() {
    this.props.magicRequest();
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <HashRouter>
          <Layout className="layout">
            <Navbar />
            <Layout>
              <Content style={{ padding: "0 50px", marginTop: 80 }}>
                <div
                  style={{ background: "#fff", padding: 24, minHeight: 280 }}
                >
                  <Routes />
                </div>
                <BackTop>
                  <div className="ant-back-top-inner">
                    <Icon type="arrow-up" />
                  </div>
                </BackTop>
              </Content>
              <Sidebar/>
            </Layout>
            <Footer style={{ textAlign: "center" }}>
              Created by{" "}
              <a
                href="https://github.com/antomarsi"
                rel="noopener noreferrer"
                target="_blank"
              >
                Antônio Marco da Silva
              </a>
            </Footer>
          </Layout>
        </HashRouter>
      </ConnectedRouter>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      magicRequest: fetchRequest
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(App);
