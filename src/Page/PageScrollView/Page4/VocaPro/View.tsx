import { Layout, theme, Empty, Result, Collapse, message,  } from "antd";
import { useEffect } from "react";
import { ItemView } from "./ItemView";
const { Header, Content,  } = Layout;
const { Panel } = Collapse;

export const VocaPro = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
  const [messageApi, messageContextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = (isLoading: boolean) => {
    if (isLoading) {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
        className: "custom-class",
        style: {
          marginTop: "10vh",
        },
      });
    } else {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 1,
        className: "custom-class",
        style: {
          marginTop: "10vh",
        },
      });
    }
  };

  console.log("[VocaPro] data :", data);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (isLoading) {
      openMessage(isLoading);
    } else {
      openMessage(isLoading);
    }
  }, [isLoading]);

  return (
    <Content
      style={{
        height: "80vh",
        margin: "14px 14px 0",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          padding: 24,
          // textAlign: "center",
          background: colorBgContainer,
        }}
      >
        {messageContextHolder}
        
        <>
          <Collapse collapsible="header" defaultActiveKey={["0"]}>
            <Panel header="JSON Format" key="1">
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {JSON.stringify(data, undefined, 4)}
              </pre>
            </Panel>
          </Collapse>
          <ItemView data={data} isLoading={isLoading} />
        </>
      </div>
    </Content>
  );
};

export default VocaPro;
