import React, { useState } from "react";
import { Layout, Icon, Typography, Modal, Col, Row, Button } from "antd";
import { Menu } from "antd";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import { MagicCircle, Descriptor } from "../../store/magic/types";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import { AppState } from "../../store/index";

const NavMenu = styled(Menu)`
  line-height: 64px;
  float: right;
`;

interface StateProps {
  magicCircles: MagicCircle[];
  descriptors: Descriptor[];
}

interface OwnProps {}

type Props = StateProps & OwnProps;

const Sidebar: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { magicCircles, descriptors } = props;
  const [visible, setVisible] = React.useState(false);
  const [selectedInfo, setSelectedInfo] = React.useState<
    MagicCircle | Descriptor | undefined
  >(undefined);

  return (
    <Layout.Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        right: 0
      }}
    >
      <NavMenu theme="dark" mode="horizontal">
        <Menu.SubMenu key="magicCircles" title={"Magic circles"}>
          {magicCircles &&
            magicCircles.map((mc: MagicCircle) => (
              <Menu.Item
                onClick={() => {
                  setSelectedInfo(mc);
                  setVisible(true);
                }}
              >
                <strong>{mc.name}</strong>
              </Menu.Item>
            ))}
        </Menu.SubMenu>
        <Menu.SubMenu key="descriptors" title={"Descriptors"}>
          {descriptors &&
            descriptors.map((d: Descriptor) => (
              <Menu.Item
                onClick={() => {
                  setSelectedInfo(d);
                  setVisible(true);
                }}
              >
                <strong>{d.name}</strong>
              </Menu.Item>
            ))}
        </Menu.SubMenu>
        <Menu.Item key="github">
          <a
            href="https://github.com/antomarsi/grimorio-danda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon style={{ fontSize: "24px" }} type="github" theme="filled" />
          </a>
        </Menu.Item>
      </NavMenu>
    </Layout.Sider>
  );
};

const mapStateToProps = (state: AppState, props: OwnProps) => ({
  magicCircles: state.magic.magicCircle,
  descriptors: state.magic.descriptors
});

export default connect(mapStateToProps)(Sidebar);
