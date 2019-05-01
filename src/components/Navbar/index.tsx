import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Layout, Icon } from "antd";
import { Menu } from "antd";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";

const LogoTitle = styled(Title)`
  height: 100%;
  padding: 0.25em 0.5rem;
  margin-bottom: 0 !important;
  background: rgba(255, 255, 255, 0.2);
  float: left;
  font-family: "Indie Flower", cursive;
  color: #ffffff !important;
`;

const NavMenu = styled(Menu)`
  line-height: 64px;
  float: right;
`;

class Navbar extends Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Layout.Header>
        <Link to="/">
          <LogoTitle level={1}>Grimório Dand'A</LogoTitle>
        </Link>
        <NavMenu theme="dark" mode="horizontal">
          <Menu.Item key="github">
            <a href="https://github.com/antomarsi/grimorio-danda-v2">
              <Icon style={{ fontSize: "24px" }} type="github" theme="filled" />
            </a>
          </Menu.Item>
        </NavMenu>
      </Layout.Header>
    );
  }
}
export default withRouter(Navbar);
