import { Row } from "antd";
import styles from "../../../theme/PageView.module.css";
import cn from "classnames";

export const TabView = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
  console.log("[TabView] data :", data);

  return (
    <>
      {data
        ? data.sents_detail.map((v: any, i: number) => (
            <Row className={cn(styles.subname)}>{`${v.raw_sentence}`}</Row>
          ))
        : null}
    </>
  );
};

export default TabView;
