import { GrammarProDataType, ChangeWordType } from "../../Redux/Types";
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
  data: GrammarProDataType;
  isLoading: boolean;
}) => {
  const changesArray = data ? data.data.changes : []
  console.log("[Model] data :", data);
  console.log("[Model] changesArray :", changesArray);

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
            } else {
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
  );
};

export default ItemView;
