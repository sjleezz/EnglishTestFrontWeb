import React, { useState } from "react";
import styled from "styled-components";
import { Row, Card, Space, message } from "antd";
import video from "../assets/videos/video3.mp4";
import assess1 from "../assets/images/assess1.jpg";
import assess2 from "../assets/images/assess2.jpg";

const { Meta } = Card;

const VideoComponent = styled.video`
  position: fixed;
  width: 100vw;
  filter: grayscale(40%);
`;

const SelectAppModePage: React.FC = () => {
  const [selectedAppMode, setSelectedAppMode] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = (appMode: string) => {
    console.log("[openMessage] appMode :", appMode);
    switch (appMode) {
      case "wordwhiz":
        messageApi.open({
          key,
          type: "success",
          content: "Welcome to WordWhiz!",
          duration: 1,
          className: "custom-class",
          style: {
            marginTop: "10vh",
          },
          onClose: () => {
            // go to Home
            window.location.href = "/Home";
          },
        });
        break;
      case "phonics":
        messageApi.open({
          key,
          type: "success",
          content: "Welcome to Phonics!",
          duration: 1,
          className: "custom-class",
          style: {
            marginTop: "10vh",
          },
          onClose: () => {
            // go to Home
            window.location.href = "/Home";
          },
        });
        break;
      default:
        messageApi.open({
          key,
          type: "error",
          content: "Some problem has been occurred... please try again",
          className: "custom-class",
          style: {
            marginTop: "10vh",
          },
        });
        break;
    }
  };

  const handleClick = (appMode: string) => {
    openMessage(appMode);
    setSelectedAppMode(appMode);
  };

  return (
    <>
      {contextHolder}
      <VideoComponent muted={true} autoPlay={true} loop>
        <source src={video} type="video/mp4" />
        <strong>Your browser does not support the video tag.</strong>
      </VideoComponent>
      <Row
        justify={"space-around"}
        align={"middle"}
        style={{ height: "80vh" }}
      >
        <Space direction={"horizontal"} align={"center"}>
          <Row onClick={() => handleClick("wordwhiz")}>
            <Card
              hoverable
              style={{ width: 340 , margin : '10px' }}
              cover={<img alt="example" src={assess1} />}
            >
              <Meta
                title="WordWhiz Mode"
                description="Test Your Voca/Grammar Capabilities"
              />
            </Card>
          </Row>
          <Row onClick={() => handleClick("phonics")}>
            <Card
              hoverable
              style={{ width: 340, margin : '10px' }}
              cover={<img alt="example" src={assess2} />}
            >
              <Meta
                title="Phonics Mode"
                description="Test Your Speech Capabilities"
              />
            </Card>
          </Row>
        </Space>
      </Row>
    </>
  );
};

export default SelectAppModePage;
