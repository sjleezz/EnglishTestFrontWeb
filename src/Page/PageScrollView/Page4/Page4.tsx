import { useRef } from "react";
import styles from "../../../theme/PageView.module.css";
import cn from "classnames";
import { Tabs, Empty, FloatButton } from "antd";
import { QuestionCircleOutlined, RedoOutlined } from "@ant-design/icons";
import TabPage from "./TabPage";
import usePageScroll from "../../../Hooks/usePageScroll";
import usePageMove from "../../../Hooks/usePageMove";
import usePageBlockScroll from "../../../Hooks/usePageBlockScroll";

const size = "large"; // 'small' | 'middle' | 'large'

const tabMenuList = ["어휘 분석", "문법 분석", "모범 답안"];

const filterTarget = (target: string) => {
  switch (target) {
    case tabMenuList[0]:
      return 0;
    case tabMenuList[1]:
      return 1;
    case tabMenuList[2]:
      return 2;
    default:
      return 0;
  }
};

const handleClickMenu1 = () => {};

const handleClickMenu2 = () => {
  window.location.reload();
};

// Page4 : 분석 결과
export const Page4 = ({
  isResult,
  onClickHandler,
  outerDivRef,
  current,
  setCurrent,
}: {
  isResult: boolean;
  onClickHandler: () => void;
  outerDivRef: React.RefObject<HTMLDivElement>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {

  const resetRef = useRef<HTMLDivElement>(null);

  console.log("[Page4] isResult :", isResult);

  // Page Movement by Scrolling Hook
  // usePageScroll({
  //   ref: resultRef,
  //   setCurrent: setCurrent,
  // });

  usePageMove({
    ref : resetRef,
    pageRef: outerDivRef,
    current : current,
    setCurrent: setCurrent
  })

  // Tab Builder
  const tabItems = () => {
    return tabMenuList.map((val, i) => {
      const id = String(i + 1);
      return {
        label: `${val}`,
        key: id,
        children: <TabPage target={filterTarget(val)} />,
      };
    });
  };

  return (
    <div>
      {isResult ? (
        <div className={cn(styles.inner, styles.tab4)} onClick={onClickHandler}>
          <Tabs
            style={{ width: "100%"}}
            defaultActiveKey="1"
            type="card"
            size={size}
            items={tabItems()}
          />
        </div>
      ) : (
        <div className={cn(styles.empty)}>
          <Empty description={"No Result"} />
        </div>
      )}
      <FloatButton.Group shape="circle" style={{ right: 40 }}>
        <FloatButton
          tooltip={<p>{"About"}</p>}
          icon={<QuestionCircleOutlined />}
          onClick={handleClickMenu1}
        />
        <FloatButton
          tooltip={<p>{"Refresh"}</p>}
          icon={<RedoOutlined />}
          onClick={handleClickMenu2}
        />
        <div ref={resetRef}>
          {current === 3 && <FloatButton.BackTop tooltip={<p>{"Go to Top"}</p>} visibilityHeight={0} />}
        </div>
      </FloatButton.Group>
    </div>
  );
};

export default Page4;
