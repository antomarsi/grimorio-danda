import React from "react";
import "antd/dist/antd.css";
import "rpg-awesome/css/rpg-awesome.min.css";
import { Layout, BackTop, Icon, Row } from "antd";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import configureStore from "./store";
import Footer from "./components/Footer";
import FilterForm from "./components/FilterForm/index";
import MagicList from "./components/MagicList/index";
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
              <Row>
                <FilterForm />
              </Row>
              <Row>
                <MagicList />
              </Row>
            </div>
            <BackTop>
              <div className="ant-back-top-inner">
                <Icon type="arrow-up" />
              </div>
            </BackTop>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </Provider>
  );
};

export default App;
