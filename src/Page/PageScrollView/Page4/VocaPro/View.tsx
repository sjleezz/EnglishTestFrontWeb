import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/Reducer/rootReducer";
import {
  Layout,
  theme,
  Empty,
  Space,
  Row,
  Col,
  Collapse,
  message,
  Progress,
  Button,
  List,
} from "antd";
import { green, red } from "@ant-design/colors";
import { DarkColor, LightColor } from "../../../Home";
import { ItemView } from "./ItemView";
import { ItemViewSimple } from "./ItemViewSimple";
import ChartPage from "./ChartPage";
import { VOCAPRO_CONSTANTS_KO } from "../../../../Constants/Constants";
import {
  VocaProDataType,
  SentsDetailType,
  WordsDetailType,
} from "../../../../Redux/Types";
import PredictionPage from "./PredictionPage";

const { Header, Content } = Layout;
const { Panel } = Collapse;

const breakPoints = {
  header: {
    // header
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    xxl: 24,
  },
  main: {
    // header
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    xxl: 24,
  },
  left: {
    // left side
    xs: 24,
    sm: 24,
    md: 24,
    lg: 12,
    xl: 12,
    xxl: 12,
  },
  right: {
    // right side
    xs: 24,
    sm: 24,
    md: 24,
    lg: 12,
    xl: 12,
    xxl: 12,
  },
  part1: {
    // cefr pannel
    xs: 4,
    sm: 4,
    md: 3,
    lg: 3,
    xl: 3,
    xxl: 3,
  },
  part2: {
    // score pannel
    xs: 20,
    sm: 20,
    md: 8,
    lg: 8,
    xl: 8,
    xxl: 8,
  },
  part3: {
    // chart pannel
    xs: 24,
    sm: 24,
    md: 10,
    lg: 10,

    xl: 10,
    xxl: 10,
  },
};

export const VocaPro = ({
  data,
  isLoading,
}: {
  data: VocaProDataType;
  isLoading: boolean;
}) => {
  const [selectedData, setSelectedData] = useState<WordsDetailType>();
  const [messageApi, messageContextHolder] = message.useMessage();
  const key = "updatable";

  const [open, setOpen] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const darkMode = useSelector(
    (state: RootState) => state.themeReducer.darkMode
  );

  console.log("[VocaPro] data :", data);

  const openMessage = (isLoading: boolean) => {
    if (isLoading) {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
        className: "custom-class",
        style: {
          marginTop: "10vh",
        },
      });
    } else {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 1,
        className: "custom-class",
        style: {
          marginTop: "10vh",
        },
      });
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const checkCefr = (cefr: string) => {
    if (cefr.includes("A")) {
      if (cefr.includes("A1")) {
        return {
          description: VOCAPRO_CONSTANTS_KO.low,
          percent: 16,
          color: red[5],
        };
      } else if (cefr.includes("A2")) {
        return {
          description: VOCAPRO_CONSTANTS_KO.low,
          percent: 32,
          color: red[3],
        };
      }
    } else if (cefr.includes("B")) {
      if (cefr.includes("B1")) {
        return {
          description: VOCAPRO_CONSTANTS_KO.mid,
          percent: 48,
          color: red[1],
        };
      } else if (cefr.includes("B2")) {
        return {
          description: VOCAPRO_CONSTANTS_KO.mid,
          percent: 64,
          color: green[1],
        };
      }
    } else if (cefr.includes("C")) {
      if (cefr.includes("C1")) {
        return {
          description: VOCAPRO_CONSTANTS_KO.high,
          percent: 80,
          color: green[3],
        };
      } else if (cefr.includes("C2")) {
        return {
          description: VOCAPRO_CONSTANTS_KO.high,
          percent: 96,
          color: green[5],
        };
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      openMessage(isLoading);
    } else {
      openMessage(isLoading);
    }
  }, [isLoading]);

  // useEffect(() => {
  //   const wheelHandler = (e: WheelEvent) => {
  //     console.log("itemRef Scroll!!");
  //     // e.stopPropagation();
  //     e.stopImmediatePropagation();
  //     // return false;
  //   };
  //   const divRefCurrent = itemRef?.current;
  //   divRefCurrent?.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     divRefCurrent?.removeEventListener("wheel", wheelHandler);
  //   };
  // }, [itemRef]);

  return (
    <div
      style={{
        padding: 24,
        textAlign: "center",
        background: colorBgContainer,
        overflowY : 'scroll'
      }}
    >
      {messageContextHolder}

      {data && (
        <Row
          style={{
            display: "flex",
            flex: "1",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col
            xs={breakPoints.header.xs}
            sm={breakPoints.header.sm}
            md={breakPoints.header.md}
            lg={breakPoints.header.lg}
            xl={breakPoints.header.xl}
            xxl={breakPoints.header.xxl}
          >
            <Row>
              <Col
                xs={breakPoints.part1.xs}
                sm={breakPoints.part1.sm}
                md={breakPoints.part1.md}
                lg={breakPoints.part1.lg}
                xl={breakPoints.part1.xl}
                xxl={breakPoints.part1.xxl}
                style={{ border: "1px solid", padding: "10px" }}
              >
                <p>{data.total_summary.total_cefr}</p>
              </Col>
              <Col
                xs={breakPoints.part2.xs}
                sm={breakPoints.part2.sm}
                md={breakPoints.part2.md}
                lg={breakPoints.part2.lg}
                xl={breakPoints.part2.xl}
                xxl={breakPoints.part2.xxl}
              >
                <p>이런 유의어는 어때요?</p>
                <Space direction="vertical">
                  <div>{`${
                    checkCefr(data.total_summary.total_cefr)?.description
                  }`}</div>
                  <div>
                    <Progress
                      percent={
                        checkCefr(data.total_summary.total_cefr)?.percent
                      }
                      steps={6}
                      strokeColor={[
                        green[1],
                        green[2],
                        green[3],
                        green[4],
                        green[5],
                        green[6],
                      ]}
                    />
                  </div>
                </Space>
              </Col>
              <Col
                xs={breakPoints.part3.xs}
                sm={breakPoints.part3.sm}
                md={breakPoints.part3.md}
                lg={breakPoints.part3.lg}
                xl={breakPoints.part3.xl}
                xxl={breakPoints.part3.xxl}
              >
                <ChartPage
                  data={data.total_summary.total_word_count_by_cefr}
                  isLoading={isLoading}
                />
              </Col>
            </Row>
          </Col>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40vh",
            }}
          >
            <Col
              xs={breakPoints.left.xs}
              sm={breakPoints.left.sm}
              md={breakPoints.left.md}
              lg={breakPoints.left.lg}
              xl={breakPoints.left.xl}
              xxl={breakPoints.left.xxl}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                height: "100%",
                overflowY: "scroll",
                padding : 10
              }}
            >
              <div ref={itemRef}>
                <ItemViewSimple
                  data={data}
                  isLoading={isLoading}
                  setSelectedData={setSelectedData}
                  onDrawerClose={onDrawerClose}
                  checkCefr={checkCefr}
                />
              </div>
            </Col>
            <Col
              xs={breakPoints.right.xs}
              sm={breakPoints.right.sm}
              md={breakPoints.right.md}
              lg={breakPoints.right.lg}
              xl={breakPoints.right.xl}
              xxl={breakPoints.right.xxl}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                height: "100%",
                padding : 10
                // overflowY: "scroll",
              }}
            >
              <PredictionPage selectedData={selectedData} />
            </Col>
          </Row>
        </Row>
      )}
    </div>
  );
};

export default VocaPro;
