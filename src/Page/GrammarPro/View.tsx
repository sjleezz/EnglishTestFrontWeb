import { Layout, theme, Empty, Result, Collapse, message } from "antd";
import { ItemView } from "./ItemView";

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

export const GrammarPro = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
  const [messageApi, contextHolder] = message.useMessage();
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
        content: "Loading is done successfully!",
        duration: 2,
        className: "custom-class",
        style: {
          marginTop: "10vh",
        },
      });
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log("[GrammarPro] data :", data);
  console.log("[GrammarPro] isLoading :", isLoading);

  openMessage(isLoading);

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
        {`Grammar Pro`}
      </Header>
      <Content
        style={{
          height: "80vh",
          margin: "14px 14px 0",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 14,
            // textAlign: "start",
            background: colorBgContainer,
          }}
        >
          {contextHolder}
          <>
            {/* <Result
                status="success"
                title="Getting data is done successfully!"
                subTitle={"please wait..."}
              /> */}

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
    </>
  );
};

export default GrammarPro;
