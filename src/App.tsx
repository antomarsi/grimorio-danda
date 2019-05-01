import React from "react";
import "antd/dist/antd.css";
import "rpg-awesome/css/rpg-awesome.min.css";
import Routes from "./routes/index";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import { Layout, Breadcrumb } from "antd";
import Navbar from "./components/Navbar";
import { HashRouter, Link } from "react-router-dom";
const { Content, Footer } = Layout;

interface AppProps {
  history: History;
}

const App: React.FC<AppProps> = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <HashRouter>
        <Layout className="layout">
          <Navbar />
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Routes />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </HashRouter>
    </ConnectedRouter>
  );
};

export default App;
