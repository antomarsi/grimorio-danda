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

interface StateProps {
  magicCircles: MagicCircle[];
  descriptors: Descriptor[];
}

interface OwnProps {}

type Props = StateProps & OwnProps;

const Navbar: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { magicCircles, descriptors } = props;
  const [visible, setVisible] = React.useState(false);
  const [selectedInfo, setSelectedInfo] = React.useState<
    MagicCircle | Descriptor | undefined
  >(undefined);

  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Link to="/">
        <LogoTitle level={1}>Grimório Dand'A</LogoTitle>
      </Link>
      <Row type="flex" justify="end">
        <Col xs={4} md={0}>
          <Button ghost icon={open ? "menu-unfold" : "menu-fold"} onClick={() => setOpen(!open)} />
        </Col>
        <Col xs={0} md={4}>
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
                <Icon
                  style={{ fontSize: "24px" }}
                  type="github"
                  theme="filled"
                />
              </a>
            </Menu.Item>
          </NavMenu>
        </Col>
      </Row>
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
              <Typography.Text strong>Descriptors avalibles: </Typography.Text>
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
    </Layout.Header>
  );
};

const mapStateToProps = (state: AppState, props: OwnProps) => ({
  magicCircles: state.magic.magicCircle,
  descriptors: state.magic.descriptors
});

export default connect(mapStateToProps)(Navbar);
