import {
  VocaProDataType,
  SentsDetailType,
  WordsDetailType,
} from "../../Redux/Types";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Skeleton, Space } from "antd";

const { Meta } = Card;

export const ItemView = ({
  data,
  isLoading,
}: {
  data: VocaProDataType;
  isLoading: boolean;
}) => {
  const sentsDetailArray = data ? data.sents_detail : [];
  console.log("[Model] data :", data);
  console.log("[Model] sentsDetailArray :", sentsDetailArray);

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
    <Space
      wrap
      direction="horizontal"
      size="middle"
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
                      style={{ width: 200, marginTop: 10 }}
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Skeleton loading={isLoading} avatar active>
                        <Meta
                          title={wordDetail.raw_word}
                          description={
                            <Space>
                              <Space>{`cefr : ${wordDetail.cefr}`}</Space>
                            </Space>
                          }
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
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
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
  );
};

export default ItemView;
