import React, { useState, useRef } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Layout, theme, Empty, Result, Row, Steps } from "antd";
import PageScrollView from "./PageScrollView/PageScrollView";

const { Header, Content, Footer } = Layout;

export const Main: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState(0);

  const currentPageNumRef = useRef<number>(0);

  const onChangeStepHandler = (value: number) => {
    console.log("onChange:", value);
    currentPageNumRef.current = value
    setCurrent(value);
  };

  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: "10px 10px 0",
          background: colorBgContainer,
        }}
      >
        <div style={{ width: "90%", padding: 5 }}>
          <Steps
            current={current}
            onChange={onChangeStepHandler}
            items={[
              {
                title: "Step 1",
                description: "Choose Mode",
                disabled: true
              },
              {
                title: "Step 2",
                description: "Choose Context",
                disabled: true
              },
              {
                title: "Step 3",
                description: "Input Text",
                disabled: true
              },
              {
                title: "Step 4",
                description: "Result",
                disabled: true
              },
            ]}
          />
        </div>
      </Header>
      <Content
        style={{
          height: "90vh",
          margin: "10px 10px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            // height: "85vh",
            // padding: 24,
            textAlign: "center",
            background: colorBgContainer,
          }}
        >
          <PageScrollView
            current={current}
            setCurrent={setCurrent}
            currentPageNumRef={currentPageNumRef}
          />
        </div>
      </Content>
    </>
  );
};

export default Main;
