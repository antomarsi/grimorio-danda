import React from "react";
import { Layout, Icon } from "antd";
import { Menu } from "antd";
import styled from "styled-components";
import { ApplicationState } from "../../store/index";
import { useSelector } from "react-redux";
import { MagicCircle, Descriptor } from "../../store/ducks/magic/types";

const NavMenu = styled(Menu)`
  line-height: 64px;
  float: right;
`;
const Sidebar: React.SFC = () => {
  const magicCircles = useSelector(
    (state: ApplicationState) => state.magic.data.magicCircles
  );
  const descriptors = useSelector(
    (state: ApplicationState) => state.magic.data.descriptors
  );
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
export default Sidebar;
