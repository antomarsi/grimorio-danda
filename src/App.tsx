import React from "react";
import "antd/dist/antd.css";
import "rpg-awesome/css/rpg-awesome.min.css";
import Routes from "./routes/index";
import { Layout, BackTop, Icon } from "antd";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import configureStore from "./store";
import history from "./routes/history";
import Footer from "./components/Footer";
const { Content } = Layout;

const store = configureStore(history);

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <Layout className="layout">
        <Navbar />
        <Layout>
          <Content style={{ padding: "0 50px", marginTop: 80 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Routes />
            </div>
            <BackTop>
              <div className="ant-back-top-inner">
                <Icon type="arrow-up" />
              </div>
            </BackTop>
          </Content>
          <Sidebar />
        </Layout>
        <Footer />
      </Layout>
    </Provider>
  );
};

export default App;
