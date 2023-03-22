import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Layout, theme, Empty, Result } from "antd";

const { Header, Content, Footer } = Layout;

export const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: "14px 14px 0",
          background: colorBgContainer,
        }}
      >
        {``}
      </Header>
      <Content style={{
        height : '100%',
        margin: "14px 14px 0", 
        overflow: "hidden" }}>
        <div
          style={{
            height : '80vh',
            padding: 24,
            textAlign: "center",
            background: colorBgContainer,
          }}
        >
          <Result
            icon={<SmileOutlined />}
            title="Welcome to Device Pro!"
          />
        </div>
      </Content>
      
    </>
  );
};

export default Main;
