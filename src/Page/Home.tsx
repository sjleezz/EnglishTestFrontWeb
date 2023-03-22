import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  HomeOutlined,
  WalletOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, Switch, Space } from "antd";
import { MenuList, MenuListArray } from "../index.d";
import SpeechPro from "../Component/SpeechPro/SpeechPro";
import VocaPro from "../Component/VocaPro/VocaPro";
import GrammarPro from "../Component/GrammarPro/GrammarPro";
import Main from "../Page/Main";
import { RootState } from "../Redux/Reducer/rootReducer";
import { UniversalAuth } from "../Component/UniversalAuth";
import { useDispatch } from "react-redux";
import { setThemeDM } from "../Redux/Actions/actionsForTheme";

const { Footer, Sider } = Layout;

export const DarkColor = "rgba(0, 55, 101, 1)";
export const LightColor = "rgba(255, 255, 255, 1)";

export const Home = () => {
  const [mode, setMode] = useState<number>(0);

  // Read-only
  const state = useSelector((state: RootState) => state.dataReducer);
  const darkMode = useSelector(
    (state: RootState) => state.themeReducer.darkMode
  );

  const dispatch = useDispatch();

  console.log("[Home] mode", mode);
  console.log("[Home] state", state);

  const itemBuilder = (
    MenuListArray: string[],
    onClickCallback: (i: number) => void
  ): MenuProps["items"] =>
    [
      HomeOutlined,
      UserOutlined,
      WalletOutlined,
      CommentOutlined,
      BarChartOutlined,
      CloudOutlined,
      AppstoreOutlined,
      TeamOutlined,
      ShopOutlined,
    ]
      .map((icon, index) => {
        if (MenuListArray.length <= index) {
          return null;
        } else {
          return {
            key: String(index + 1),
            icon: React.createElement(icon),
            label: MenuListArray[index],
            onClick: () => {
              console.log(MenuListArray[index]);
              onClickCallback(index);
            },
          };
        }
      })
      .filter((el) => el);

  const handleClickMenu = (menu: number) => {
    switch (menu) {
      case MenuList.SpeechPro:
        setMode(MenuList.SpeechPro);
        break;
      case MenuList.VocaPro:
        setMode(MenuList.VocaPro);
        break;
      case MenuList.GrammarPro:
        setMode(MenuList.GrammarPro);
        break;
      default:
        setMode(MenuList.Main);
        break;
    }
  };

  const changeTheme = () => {
    dispatch(setThemeDM(!darkMode));
  };

  return (
    <>
      {!state.authToken && <UniversalAuth />}
      <Layout hasSider>
        <Sider
          theme={darkMode ? "dark" : "light"}
          style={{
            overflow: "hidden",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
          >
            <Switch
              checked={darkMode}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Space>

          <Menu
            theme={darkMode ? "dark" : "light"}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={itemBuilder(MenuListArray, handleClickMenu)}
          />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200, overflow: "hidden", }}>
          {mode === MenuList.Main && <Main />}
          {mode === MenuList.SpeechPro && <SpeechPro />}
          {mode === MenuList.VocaPro && <VocaPro />}
          {mode === MenuList.GrammarPro && <GrammarPro />}

          <Footer
            style={{
              position: "fixed",
              bottom: 0,
              margin: 0,
              width: "90%",
              textAlign: "center",
            }}
          >
            DevicePro ©2023 Created by Mediazen
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
