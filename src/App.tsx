import React from "react";
import "rpg-awesome/css/rpg-awesome.min.css";
import { Layout, BackTop, Icon, Row } from "antd";
import Topbar from "./components/Topbar";
import { Provider } from "react-redux";
import configureStore from "./store";
import Footer from "./components/Footer";
import FilterForm from "./components/FilterForm/index";
import MagicList from "./components/MagicList/index";
const { Content } = Layout;

const store = configureStore();

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <Layout className="layout">
        <Topbar />
        <Layout>
          <Content className="page-content">
            <div className="content-wrapper">
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
