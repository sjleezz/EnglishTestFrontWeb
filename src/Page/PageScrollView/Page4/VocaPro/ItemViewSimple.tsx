import {
  VocaProDataType,
  SentsDetailType,
  WordsDetailType,
  sampleWordsDetail,
  sampleSentsDetail
} from "../../../../Redux/Types";
import { Card, Skeleton, Space, Modal } from "antd";

const { Meta } = Card;

export const ItemViewSimple = ({
  data,
  isLoading,
  setSelectedData,
  onDrawerClose,
  checkCefr,
}: {
  data: VocaProDataType;
  isLoading: boolean;
  setSelectedData: React.Dispatch<
    React.SetStateAction<WordsDetailType | undefined>
  >;
  onDrawerClose: React.Dispatch<React.SetStateAction<boolean>>;
  checkCefr: (cefr: string) =>
    | {
        description: string;
        percent: number;
        color: string
      }
    | undefined;
}) => {
  const [modal, modalContextHolder] = Modal.useModal();
  const sentsDetailArray = data ? data.sents_detail : [];
  console.log("[Model] data :", data);
  console.log("[Model] sentsDetailArray :", sentsDetailArray);

  return (
    <>
      {modalContextHolder}
      <Space
        wrap
        direction="horizontal"
        size="small"
        style={{ display: "flex", padding : 4, justifyContent : 'center' }}
      >
        {!isLoading ? (
          <>
            {sentsDetailArray.map(
              (sentenceDetail: SentsDetailType, idx: number) => {
                return sentenceDetail.words_detail.map(
                  (wordDetail: WordsDetailType, i) => {
                    return (
                      <Card
                        size="small"
                        style={{
                          width: 100,
                          height: 50,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "5px",
                          cursor: "pointer",
                          border: `1px solid ${checkCefr(wordDetail.cefr)?.color}`,
                        }}
                        onClick={() => {
                          setSelectedData(wordDetail);
                          onDrawerClose(true);
                        }}
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

export default ItemViewSimple;
