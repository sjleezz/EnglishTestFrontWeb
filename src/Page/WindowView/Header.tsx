import React from "react";
import styles from "../../theme/WindowView.module.css";
import cn from "classnames";
import { UserOutlined } from "@ant-design/icons";
import { Statistic, Row, Col, Progress, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Reducer/rootReducer";

export const Header = ({ windowCurrentNum }: { windowCurrentNum: number }) => {
  // const timeout = useSelector((state : RootState) => state.dataReducer.timeout )
  const contentsState = useSelector(
    (state: RootState) => state.contentsReducer
  );
  const windowNum = useSelector(
    (state: RootState) => state.dataReducer.windowNum
  );

  console.log("[Header] contentsState :", contentsState);

  const headerbuilder = () => {
    switch (windowCurrentNum) {
      case 1:
        if (contentsState.contents1.length > 0) {
          return contentsState.contents1[contentsState.currentNum - 1];
        } else {
          return { title: "No Data" };
        }
      case 2:
        if (contentsState.contents2.length > 0) {
          return contentsState.contents2[
            contentsState.currentNum - contentsState.contents1.length - 1
          ];
        } else {
          return { title: "No Data" };
        }
      case 3:
        if (contentsState.contents3.length > 0) {
          return contentsState.contents3[
            contentsState.currentNum -
              contentsState.contents1.length +
              contentsState.contents2.length -
              1
          ];
        } else {
          return { title: "No Data" };
        }
      case 4:
        if (contentsState.contents4.length > 0) {
          return contentsState.contents4[
            contentsState.currentNum -
              contentsState.contents1.length +
              contentsState.contents2.length +
              contentsState.contents3.length -
              1
          ];
        } else {
          return { title: "No Data" };
        }
      case 5:
        if (contentsState.contents5.length > 0) {
          return contentsState.contents5[
            contentsState.currentNum -
            contentsState.contents1.length +
            contentsState.contents2.length +
            contentsState.contents3.length +
            contentsState.contents4.length -
            1
          ];
        } else {
          return { title: "No Data" };
        }
      case 6:
        if (contentsState.contents6.length > 0) {
          return contentsState.contents6[
            contentsState.currentNum -
            contentsState.contents1.length +
            contentsState.contents2.length +
            contentsState.contents3.length +
            contentsState.contents4.length +
            contentsState.contents5.length -
            1
          ];
        } else {
          return { title: "No Data" };
        }
      default:
        return { title: "[headerbuilder] error has been occurred " };
    }
  };

  return (
    <Row className={cn(styles.header)}>
      <Col span={24}>{`Subject : ${windowCurrentNum}`}</Col>
      {/* <Col>{headerbuilder().title}</Col> */}
    </Row>
  );
};

export default Header;
