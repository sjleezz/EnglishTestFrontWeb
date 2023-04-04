import React from "react";
import styles from "../../theme/WindowView.module.css";
import cn from "classnames";
import { Row, Col, Button, Statistic, Progress, Avatar, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Reducer/rootReducer";
import RecordView from "./RecordView";

const { Countdown } = Statistic;

export const Footer = () => {
  const timeout = useSelector((state: RootState) => state.dataReducer.timeout);
  const contentsState = useSelector(
    (state: RootState) => state.contentsReducer
  );

  // const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
  const deadline = Date.now() + 1000 * 60 * timeout;

  const onFinish = () => {
    console.log("finished!");
  };

  const onChange = (val: number) => {
    if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
  };

  return (
    <>
      <Row className={cn(styles.footer)}>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={4}
          xl={4}
          xxl={4}
          style={{ display: "flex", justifyContent: "center", padding: 10 }}
        >
          {/* <Row>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80 }}
              icon={<UserOutlined />}
            />
          </Row> */}
          <Row gutter={4}>
            <Countdown
              format={"mm:ss"}
              title={<div>{"Timer"}</div>}
              value={deadline}
              onFinish={onFinish}
            />
          </Row>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={20}
          xl={20}
          xxl={20}
          style={{ display: "flex", justifyContent: "start", padding: 10 }}
        >
          <Row style={{ display: "flex", justifyContent: "start", padding: 10, width : '100%' }}>
            <Col span={24}>
              <div>Progress</div>
            </Col>
            <Col span={24}>
              <Progress
                showInfo={false}
                percent={
                  (Math.round(
                    (contentsState.currentNum / contentsState.totalNum) * 100
                  ) *
                    100) /
                  100
                }
                // type="circle"
                status="active"
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                // size={20}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <RecordView />
    </>
  );
};

export default Footer;
