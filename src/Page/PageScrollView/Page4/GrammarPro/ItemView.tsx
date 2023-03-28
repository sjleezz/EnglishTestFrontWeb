import { useState } from 'react'
import { GrammarProDataType, ChangeWordType } from "../../../../Redux/Types";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Card, Skeleton, Space, Modal } from "antd";

const { Meta } = Card;

export const ItemView = ({
  data,
  isLoading,
}: {
  data: GrammarProDataType;
  isLoading: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ChangeWordType>();
  const changesArray = data ? data.data.changes : [];
  console.log("[Model] data :", data);
  console.log("[Model] changesArray :", changesArray);

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const showModal = (changeWord: ChangeWordType) => {
    setModalData(changeWord)
    setOpen(true);
  };

  const sampleChangeWord = {
    idx_start: 0,
    idx_end: 0,
    before_change: "",
    after_change: "",
    cefr: "",
    change_type: "",
    error_type: "",
    description: "",
    change_idx: 0,
  };

  const descriptionHandler = (description: string) => {
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
      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <p>{`title: ${modalData}`}</p>
        <p>{`CEFR: ${modalData?.cefr}`}</p>
        <p>{`Description: ${'Message'}`}</p>
      </Modal>
      <Space
        wrap
        direction="horizontal"
        size="middle"
        style={{ display: "flex" }}
      >
        {!isLoading ? (
          <>
            {changesArray.map((val: ChangeWordType, idx: number) => {
              if (val.change_type === "del") {
                return (
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                      <SettingOutlined
                        key="setting"
                        onClick={() => showModal(val)}
                      />,
                      <InfoCircleOutlined
                        key="info"
                        onClick={() => showModal(val)}
                      />,
                      <EllipsisOutlined
                        key="ellipsis"
                        onClick={() => showModal(val)}
                      />,
                    ]}
                  >
                    <Skeleton loading={isLoading} avatar active>
                      <Meta
                        title={val.before_change}
                        description={val.change_type}
                      />
                    </Skeleton>
                  </Card>
                );
              } else {
                return (
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                      <SettingOutlined
                        key="setting"
                        onClick={() => showModal(val)}
                      />,
                      <InfoCircleOutlined
                        key="info"
                        onClick={() => showModal(val)}
                      />,
                      <EllipsisOutlined
                        key="ellipsis"
                        onClick={() => showModal(val)}
                      />,
                    ]}
                  >
                    <Skeleton loading={isLoading} avatar active>
                      <Meta
                        title={val.after_change}
                        description={descriptionHandler(val.change_type)}
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
              .map((val: ChangeWordType, idx: number) => {
                return (
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Skeleton loading={isLoading} avatar active>
                      <Meta
                        title={val.before_change}
                        description={val.change_type}
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
