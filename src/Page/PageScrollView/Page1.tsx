import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../Redux/Actions/actionsForData";
import styles from "../../theme/PageView.module.css";
import cn from "classnames";
import assess1 from "../../assets/images/assess1.jpg";
import assess2 from "../../assets/images/assess2.jpg";
import { Avatar, Card, Space, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { usePageMove } from "../../Hooks/usePageMove";
import { ModeList, ModeListArray } from "../../index.d";

const { Meta } = Card;

// Page 1 : 모드 선택
export const Page1 = ({
  onClickHandler,
  outerDivRef,
  setCurrent,
}: {
  onClickHandler: () => void;
  outerDivRef: React.RefObject<HTMLDivElement>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const clickRef1 = useRef<HTMLDivElement>(null);
  const clickRef2 = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  usePageMove({
    ref: clickRef1,
    pageRef: outerDivRef,
    current: 1,
    setCurrent: setCurrent,
  });
  usePageMove({
    ref: clickRef2,
    pageRef: outerDivRef,
    current: 1,
    setCurrent: setCurrent,
  });

  const handleClick = (mode: number) => {
    dispatch(setMode(ModeListArray[mode]));
  };

  return (
    <div className={cn(styles.inner, styles.tab1)} onClick={onClickHandler}>
      <Space direction="horizontal">
        <Card
          ref={clickRef1}
          onClick={() => handleClick(ModeList.Mode1)}
          hoverable
          style={{ width: 400 }}
          cover={<img alt="example" src={assess1} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={"https://joesch.moe/api/v1/random" + 1} />}
            title="쓰기 연습"
            description="This is the description"
          />
        </Card>
        <Card
         ref={clickRef2}
          hoverable
          onClick={() => handleClick(ModeList.Mode2)}
          style={{ width: 400 }}
          cover={<img alt="example" src={assess2} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={"https://joesch.moe/api/v1/random" + 2} />}
            title="분석 리포트"
            description="This is the description"
          />
        </Card>
      </Space>
    </div>
  );
};

export default Page1;
