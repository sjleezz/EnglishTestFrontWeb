import {
  VocaProDataType,
  SentsDetailType,
  WordsDetailType,
} from "../../../../Redux/Types";
import {
  CheckOutlined,
  EllipsisOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Card, Skeleton, Space, Modal } from "antd";

const { Meta } = Card;

export const ItemView = ({
  data,
  isLoading,
  setSelectedData,
  onDrawerClose
}: {
  data: VocaProDataType;
  isLoading: boolean;
  setSelectedData: React.Dispatch<
    React.SetStateAction<WordsDetailType | undefined>
  >;
  onDrawerClose: React.Dispatch<
  React.SetStateAction<boolean>
>;
}) => {
  const [modal, modalContextHolder] = Modal.useModal();
  const sentsDetailArray = data ? data.sents_detail : [];
  console.log("[Model] data :", data);
  console.log("[Model] sentsDetailArray :", sentsDetailArray);

  const handleClick = (wordDetail: WordsDetailType, type: string) => {
    let instance = null;
    switch (type) {
      case "info":
        instance = modal.success({
          title: `${wordDetail.raw_word}`,
          content: (
            <div>
              <div>{`CEFR : ${wordDetail.cefr}`}</div>
              <div>
                {`Description : ${wordDetail.description[0].dictionary_example[0]}`}
              </div>
            </div>
          ),
        });
        break;
      case "setting":
        instance = modal.success({
          title: `${wordDetail.raw_word}`,
          content: (
            <div>
              <div>{`CEFR : ${wordDetail.cefr}`}</div>
              <div>
                {`Description : ${wordDetail.description[0].dictionary_example[0]}`}
              </div>
            </div>
          ),
        });
        break;
      case "select":
        setSelectedData(wordDetail);
        onDrawerClose(true)
        break;
      default:
        instance = modal.success({
          title: "Error",
          content: `Error has been occurred.`,
        });
        break;
    }
  };

  const sampleWordsDetail = {
    word_idx: 0,
    raw_word: "",
    cefr: "",
    stopword: false,
    word: "",
    lemma: "",
    pos: "",
    html_description: "",
    description: [],
    synonym: [],
  };

  const sampleSentsDetail = {
    sent_idx: 0,
    raw_sentence: "",
    sentence: "",
    sentence_summary: {},
    words_detail: Array(10).fill(sampleWordsDetail),
  };

  return (
    <>
      {modalContextHolder}
      <Space
        wrap
        direction="horizontal"
        size="small"
        style={{ display: "flex" }}
      >
        {!isLoading ? (
          <>
            {sentsDetailArray.map(
              (sentenceDetail: SentsDetailType, idx: number) => {
                return sentenceDetail.words_detail.map(
                  (wordDetail: WordsDetailType, i) => {
                    return (
                      <Card
                        style={{ width: 100, marginTop: 5 }}
                        actions={[
                          <InfoCircleOutlined
                            key="info"
                            onClick={() => handleClick(wordDetail, "info")}
                          />,
                          <CheckOutlined
                            key="select"
                            onClick={() => handleClick(wordDetail, "select")}
                          />,
                        ]}
                      >
                        <Skeleton loading={isLoading} avatar active>
                          <Meta
                            title={wordDetail.raw_word}
                            // description={
                            //   <Space>
                            //     <Space>{`cefr : ${wordDetail.cefr}`}</Space>
                            //   </Space>
                            // }
                          />
                        </Skeleton>
                      </Card>
                    );
                  }
                );
              }
            )}
          </>
        ) : (
          <>
            {Array(8)
              .fill(sampleSentsDetail)
              .map((sentenceDetail: SentsDetailType, idx: number) => {
                return sentenceDetail.words_detail.map(
                  (wordDetail: WordsDetailType, i) => {
                    return (
                      <Card
                        style={{ width: 200, marginTop: 10 }}
                        actions={[
                          <SettingOutlined
                            key="setting"
                            onClick={() => handleClick(wordDetail, "setting")}
                          />,
                          <InfoCircleOutlined
                            key="info"
                            onClick={() => handleClick(wordDetail, "info")}
                          />,
                          <EllipsisOutlined
                            key="ellipsis"
                            onClick={() => handleClick(wordDetail, "ellipsis")}
                          />,
                        ]}
                      >
                        <Skeleton loading={isLoading} avatar active>
                          <Meta
                            title={wordDetail.raw_word}
                            description={wordDetail.cefr}
                          />
                        </Skeleton>
                      </Card>
                    );
                  }
                );
              })}
          </>
        )}
      </Space>
    </>
  );
};

export default ItemView;
