import { useState } from "react";
import {
  GrammarProDataType,
  GrammarProDataFieldType,
  ChangeWordType,
  sampleChangeWord,
} from "../../../../Redux/Types";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Skeleton, Space, Modal } from "antd";

const { Meta } = Card;

export const ItemView = ({
  data,
  isLoading,
  setSelectedData,
  onDrawerClose,
  checkCefr,
}: {
  data: GrammarProDataType;
  isLoading: boolean;
  setSelectedData: React.Dispatch<
    React.SetStateAction<ChangeWordType | undefined>
  >;
  onDrawerClose: React.Dispatch<React.SetStateAction<boolean>>;
  checkCefr: (cefr: string) =>
    | {
        description: string;
        percent: number;
        color: string;
      }
    | undefined;
}) => {
  const [modal, modalContextHolder] = Modal.useModal();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ChangeWordType>();

  const changesArray = data ? data.data.changes : [];
  console.log("[Model] data :", data);
  console.log("[Model] changesArray :", changesArray);

  // const handleOk = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   setOpen(false);
  // };

  // const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   setOpen(false);
  // };

  const showModal = (changeWord: ChangeWordType) => {
    setModalData(changeWord);
    setOpen(true);
  };

  const filterDescription = (description: string) => {
    switch (description) {
      case "keep":
        return "Keep";
      case "mod":
        return "Modified";
      case "add":
        return "Add";
      case "del":
        return "Delete";
      default:
        return "-";
    }
  };

  return (
    <>
      {modalContextHolder}
      <Space
        wrap
        direction="horizontal"
        size="middle"
        style={{ display: "flex" }}
      >
        {!isLoading ? (
          <>
            {changesArray.map((changeWord: ChangeWordType, idx: number) => {
              if (changeWord.change_type === "del") {
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
                      border: `1px solid ${checkCefr(changeWord.cefr)?.color}`,
                    }}
                    onClick={() => {
                      setSelectedData(changeWord);
                      onDrawerClose(true);
                    }}
                  >
                    <Skeleton loading={isLoading} avatar active>
                      <Meta
                        title={changeWord.before_change}
                        // description={changeWord.change_type}
                      />
                    </Skeleton>
                  </Card>
                );
              } else {
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
                    border: `1px solid ${checkCefr(changeWord.cefr)?.color}`,
                  }}
                  onClick={() => {
                    setSelectedData(changeWord);
                    onDrawerClose(true);
                  }}
                  >
                    <Skeleton loading={isLoading} avatar active>
                      <Meta
                        title={changeWord.after_change}
                        // description={filterDescription(changeWord.change_type)}
                      />
                    </Skeleton>
                  </Card>
                );
              }
            })}
          </>
        ) : (
          <>
            {Array(8)
              .fill(sampleChangeWord)
              .map((changeWord: ChangeWordType, idx: number) => {
                return (
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[<InfoCircleOutlined key="info" />]}
                  >
                    <Skeleton loading={isLoading} avatar active>
                      <Meta
                        title={changeWord.before_change}
                        description={changeWord.change_type}
                      />
                    </Skeleton>
                  </Card>
                );
              })}
          </>
        )}
      </Space>
    </>
  );
};

export default ItemView;
