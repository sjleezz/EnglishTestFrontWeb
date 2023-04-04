import React from "react";
import styles from "../../theme/WindowView.module.css";
import cn from "classnames";
import {
  AudioOutlined,
  AudioMutedOutlined,
  AlignCenterOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Row, Col, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Reducer/rootReducer";
import {
  increaseWindowNum,
  decreaseWindowNum,
} from "../../Redux/Actions/actionsForData";
import {
  increaseCurrentNum,
  setCurrentNum,
  setTotalNum,
} from "../../Redux/Actions/actionsForContents";
import MainButton from "./Button";

export const RecordView = () => {
  const isRecording = useSelector(
    (state: RootState) => state.dataReducer.isRecording
  );

  const contentsState = useSelector(
    (state: RootState) => state.contentsReducer
  );

  const windowNum = useSelector(
    (state: RootState) => state.dataReducer.windowNum
  );

  const dispatch = useDispatch();

  const filterContents = (winNum : number) => {
    switch(winNum) {
      case 1 :
        return contentsState.contents1
      case 2 :
        return contentsState.contents2
      case 3 :
        return contentsState.contents3
      case 4 :
        return contentsState.contents4
      case 5 :
        return contentsState.contents5
      case 6 :
        return contentsState.contents6
      default :
        return contentsState.contents1
    }
  }

  const handleClickNext = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    if (contentsState.currentNum === filterContents(windowNum.currentNum).length) {
      dispatch(increaseWindowNum());
    }
    dispatch(increaseCurrentNum());
  };

  return (
    <Row>
      <Col
        xs={24}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        xxl={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        {!isRecording ? (
          <>
            <AudioMutedOutlined style={{ fontSize: "20px" }} />
            <Divider type={"vertical"} />
            <div>{"Prepare to record"}</div>
          </>
        ) : (
          <>
            <AudioOutlined style={{ fontSize: "20px" }} />
            <Divider type={"vertical"} />
            <div>{"Recording..."}</div>
          </>
        )}
      </Col>
      <Col
        xs={24}
        sm={16}
        md={16}
        lg={16}
        xl={16}
        xxl={16}
        style={{ display: "flex", justifyContent: "center", padding: 5 }}
      >
        <AlignCenterOutlined rotate={-90} style={{ fontSize: "25px" }} />
        <AlignCenterOutlined rotate={90} style={{ fontSize: "25px" }} />
      </Col>
      <Col
        xs={24}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        xxl={4}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <MainButton name={"Next"} handleClick={handleClickNext} />
      </Col>
    </Row>
  );
};

export default RecordView;
