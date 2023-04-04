import React from "react";
import styles from "../../theme/WindowView.module.css";
import cn from "classnames";
import {
  AudioOutlined,
  AudioMutedOutlined,
  AlignCenterOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Reducer/rootReducer";

export const MainButton = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}) => {
  const isRecording = useSelector(
    (state: RootState) => state.dataReducer.isRecording
  );

  const contentsState = useSelector(
    (state: RootState) => state.contentsReducer
  );

  console.log("[Button] contentsState :", contentsState);

  return (
    <Button type="primary" onClick={handleClick}>
      {name}
      <ArrowRightOutlined />
    </Button>
  );
};

export default MainButton;
