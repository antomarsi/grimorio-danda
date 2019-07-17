import React, { useState } from "react";
import { Layout, Icon, Typography, Modal } from "antd";
import { Menu } from "antd";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import { MagicCircle, Descriptor } from "../../store/ducks/magic/types";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/index";

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
const Header = styled(Layout.Header)`
  position: "fixed";
  z-index: 1;
  width: "100%";
`;
const Navbar: React.SFC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const magicCircles = useSelector(
    (state: ApplicationState) => state.magic.data.magicCircles
  );
  const descriptors = useSelector(
    (state: ApplicationState) => state.magic.data.descriptors
  );
  const [selectedInfo, setSelectedInfo] = React.useState<
    MagicCircle | Descriptor | undefined
  >(undefined);

  return (
    <Header>
      <Link to="/">
        <LogoTitle level={1}>Grimório Dand'A</LogoTitle>
      </Link>
      <NavMenu theme="dark" mode="horizontal">
        <Menu.SubMenu key="magicCircles" title={"Magic circles"}>
          {magicCircles &&
            magicCircles.map((mc: MagicCircle) => (
              <Menu.Item
                key={mc.id}
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
                key={d.id}
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
      <Modal
        title={selectedInfo ? selectedInfo.name : ""}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        afterClose={() => setSelectedInfo(undefined)}
      >
        <Typography.Title level={3}>
          {selectedInfo && selectedInfo.name}
        </Typography.Title>
        <p>
          <ReactMarkdown
            source={
              selectedInfo
                ? selectedInfo.description
                : "###No description found"
            }
          />
        </p>
        <p>
          {selectedInfo && selectedInfo.hasOwnProperty("descriptors") && (
            <p>
              <Typography.Text strong>Descriptors available: </Typography.Text>
              {(selectedInfo as MagicCircle).descriptors
                .map(d => {
                  let desc = descriptors.find(dc => dc.id === d);
                  if (desc === undefined) return null;
                  return desc.name;
                })
                .join(", ")}
            </p>
          )}
        </p>
      </Modal>
    </Header>
  );
};

export default Navbar;
