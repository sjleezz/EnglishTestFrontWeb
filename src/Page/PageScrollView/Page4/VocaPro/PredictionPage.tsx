import {
  Space,
} from "antd";
import { SynonymType, WordsDetailType } from "../../../../Redux/Types";

export const PredictionPage = ({
  selectedData,
}: {
  selectedData: WordsDetailType | undefined;
}) => {
  console.log("[PredictionPage] selectedData :", selectedData);

  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "start",
        alignItems: "center",
        
      }}
    >
      <div>
        <p>AI가 문맥적 의미를 예측했어요.</p>
      </div>
      <Space direction="horizontal" style={{ border: "1px solid", boxShadow : '1px 1px 10px #222222' }}>
        <Space
          direction="vertical"
          align="center"
          
        >
          <div>{selectedData?.cefr}</div>
          <div>{selectedData?.raw_word}</div>
        </Space>
        <Space
          direction="vertical"
          align="start"
        >
          <div>{`Meaning : `}</div>
          <div>{selectedData?.description[0].definition}</div>
          <div>{`Usage : `}</div>
          <Space direction="vertical" align="start">
            {selectedData?.description[0].dictionary_example.map(
              (example: string, index) => {
                return <div>{`${index + 1} : ${example}`}</div>;
              }
            )}
          </Space>
        </Space>
      </Space>

      <div>
        <p>이런 유의어는 어때요?</p>
      </div>
      <Space>
        {selectedData?.synonym.map((syno: SynonymType, i) => {
          return (
            <Space direction="vertical" style={{ border: "1px solid" }}>
              <div>{syno.cefr}</div>
              <div>{syno.word}</div>
            </Space>
          );
        })}
      </Space>
    </Space>
  );
};

export default PredictionPage;
