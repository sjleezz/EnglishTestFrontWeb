import { Space, Empty } from "antd";

const ModelAnswer = () => {
  return (
    <Space
      style={{
        margin : '100px',
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Empty description={"Now Developing..."} />
    </Space>
  );
};

export default ModelAnswer;
