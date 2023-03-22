import { Avatar, List, Layout, theme, Skeleton, Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducer/rootReducer";
import { DarkColor, LightColor } from "../Home";

const { Header, Content, Footer } = Layout;

type PaginationPosition = "top" | "bottom" | "both";

type PaginationAlign = "start" | "center" | "end";

// const positionOptions = ['top', 'bottom', 'both'];

// const alignOptions = ['start', 'center', 'end'];

const items = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  name: `Chapter : ${i + 1}`,
  avatar: `https://joesch.moe/api/v1/random?key=${i}`,
  description: "Chapter",
}));

const SpeechProView = ({
  chapters,
  chapterLoading,
  sentenceLoading,
  getListSentences,
}: {
  chapters: any[];
  chapterLoading: boolean;
  sentenceLoading: boolean;
  getListSentences: (selectedChapId: number, nextPageTok: number) => void;
}) => {
  const sentences = useSelector(
    (state: RootState) =>
      state.speechProSentenceReducer.speechproSentence.sentences
  );

  const darkMode = useSelector(
    (state: RootState) => state.themeReducer.darkMode
  );

  const [position, setPosition] = useState<PaginationPosition>("bottom");
  const [align, setAlign] = useState<PaginationAlign>("center");
  const [thisItem, setThisitem] = useState<any>({
    chapterName: "",
    chapterId: 0,
  });

  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = (chapterName: string, chapterId: number) => {
    setOpen(true);
    setThisitem({
      chapterName: chapterName,
      chapterId: chapterId,
    });
    getListSentences(chapterId, 1);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log("[SpeechProView] thisItem :", thisItem);

  return (
    <>
      <Header
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: "14px 14px 0",
          background: colorBgContainer,
        }}
      >
        {`Speech Pro`}
      </Header>
      <Content
        style={{
          height: "80vh",
          margin: "14px 14px 0",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            // height: "100%",
            padding: 24,
            textAlign: "center",
            background: colorBgContainer,
          }}
        >
          {!chapterLoading ? (
            <List
              pagination={{ position, align }}
              dataSource={chapters}
              renderItem={(item, index) => (
                <List.Item style={{ cursor: "pointer", padding: 14 }}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://joesch.moe/api/v1/random?key=${index}`}
                      />
                    }
                    title={
                      <div
                      >{`Chapter : ${item.name}`}</div>
                    }
                    description={
                      <div
                      >{`Chapter Id : ${item.id}`}</div>
                    }
                  />
                  <Button
                    type="primary"
                    onClick={() => showDrawer(item.name, item.id)}
                  >
                    Open
                  </Button>
                </List.Item>
              )}
            />
          ) : (
            <span>
              <List
                pagination={{ position, align }}
                dataSource={items}
                renderItem={(item, index) => (
                  <List.Item>
                    <Skeleton loading={chapterLoading} active avatar>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={`${item.id}`}
                        description={`Chapters`}
                      />
                      {item.name}
                    </Skeleton>
                  </List.Item>
                )}
              />
            </span>
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        SpeechPro ©2023 Created by Mediazen
      </Footer>

      <Drawer
        style={{
          background: darkMode ? DarkColor : LightColor,
        }}
        title={
          <div
            style={{
              color: darkMode ? LightColor : DarkColor,
            }}
          >{`Chapter Name : ${thisItem.chapterName}`}</div>
        }
        placement={"top"}
        width={window.innerWidth}
        height={window.innerHeight - 200}
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={onClose}>
              Close
            </Button>
          </Space>
        }
      >
        {!sentenceLoading ? (
          <List
            style={{
              color: darkMode ? LightColor : DarkColor,
            }}
            pagination={{ position, align }}
            dataSource={sentences}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div
                      style={{
                        color: darkMode ? LightColor : DarkColor,
                        cursor: "pointer",
                      }}
                      onClick={showChildrenDrawer}
                    >
                      {item.text}
                    </div>
                  }
                  description={
                    <div
                      style={{
                        color: darkMode ? LightColor : DarkColor,
                      }}
                    >
                      <div>{`Sentence Id : ${item.id}`}</div>
                      <div>{`ipa : ${item.ipa}`}</div>
                      <div>{`words : ${item.words
                        .split("|")
                        .map((v) => <span>{v}</span>)}`}</div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <span>
            <List
              style={{
                color: darkMode ? LightColor : DarkColor,
              }}
              pagination={{ position, align }}
              dataSource={items}
              renderItem={(item, index) => (
                <List.Item>
                  <Skeleton loading={sentenceLoading} active>
                    <List.Item.Meta
                      title={"title"}
                      description={`description`}
                    />
                    {item.name}
                  </Skeleton>
                </List.Item>
              )}
            />
          </span>
        )}

        <Drawer
          style={{
            background: darkMode ? DarkColor : LightColor,
          }}
          title={
            <div
              style={{
                color: darkMode ? LightColor : DarkColor,
              }}
            >
              {"More Detail Information"}
            </div>
          }
          placement={"top"}
          width={window.innerWidth}
          height={window.innerHeight - 300}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          extra={
            <Space>
              <Button type="primary" onClick={onChildrenDrawerClose}>
                Close
              </Button>
            </Space>
          }
        >
          <div
            style={{
              color: darkMode ? LightColor : DarkColor,
            }}
          >{`This is Information more detailed about this sentence.`}</div>
        </Drawer>
      </Drawer>
    </>
  );
};

export default React.memo(SpeechProView);
