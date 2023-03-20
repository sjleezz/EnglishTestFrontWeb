import React, { useState } from "react";
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
import { Layout, Menu, theme, MenuProps } from "antd";
import { MenuList, MenuListArray } from "../index.d";
import SpeechPro from "../Component/SpeechPro/SpeechPro";
import VocaPro from "../Component/VocaPro/VocaPro";
import GrammarPro from "../Component/GrammarPro/GrammarPro";

const { Header, Content, Footer, Sider } = Layout;

export const Frame = ({
  mode,
  setMode,
}: {
  mode: number;
  setMode: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log('[Frame] mode', mode)

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
        if(index === 0) return null
        if (MenuListArray.length <= index) {
          return null;
        } else {
          return {
            key: String(index + 1),
            icon: React.createElement(icon),
            label: MenuListArray[index],
            onClick: () => {
              console.log(MenuListArray[index]); 
              onClickCallback(index)
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
        setMode(MenuList.Home);
        break;
    }
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={itemBuilder(MenuListArray, handleClickMenu)}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            {/* {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            } */}
            {mode === MenuList.SpeechPro && <SpeechPro />}
            {mode === MenuList.VocaPro && <VocaPro />}
            {mode === MenuList.GrammarPro && <GrammarPro />}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Frame;
