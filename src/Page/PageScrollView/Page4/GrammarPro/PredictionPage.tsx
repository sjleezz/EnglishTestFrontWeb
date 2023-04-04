import { Space, Empty } from "antd";
import { SynonymType, ChangeWordType } from "../../../../Redux/Types";

export const PredictionPage = ({
  selectedData,
}: {
  selectedData: ChangeWordType | undefined;
}) => {
  console.log("[PredictionPage] selectedData :", selectedData);

  return (
    <Space 
      style={{
        height: '100%',
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
       <Empty description={'Now Developing...'} />
    </Space>
   
    // <Space
    //   direction="vertical"
    //   style={{
    //     display: "flex",
    //     flexGrow: 1,
    //     justifyContent: "start",
    //     alignItems: "center",
    //   }}
    // >
    //   <Space
    //     direction="horizontal"
    //     style={{ border: "1px solid", boxShadow: "1px 1px 10px #222222" }}
    //   >
    //     <Space direction="vertical" align="center">
    //       <div>{selectedData?.cefr}</div>
    //       <div>{selectedData?.error_type}</div>
    //     </Space>
    //     <Space direction="vertical" align="start">
    //       <div>{selectedData?.before_change}</div>
    //       <span>{"->"}</span>
    //       <span>{selectedData?.after_change}</span>
    //       <div>
    //         {selectedData?.description
    //           .replaceAll("class", "className")
    //           .replaceAll('"', "")}
    //       </div>
    //     </Space>
    //   </Space>
    // </Space>
  );
};

export default PredictionPage;
