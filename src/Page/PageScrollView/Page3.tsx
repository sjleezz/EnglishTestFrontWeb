import React, { useRef, useState } from "react";
import styles from "../../theme/PageView.module.css";
import cn from "classnames";
import { useSelector } from "react-redux";
import { Form, Input, Row, Empty, Card, Button, Statistic } from "antd";
import { ArrowDownOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { RootState } from "../../Redux/Reducer/rootReducer";
import { usePageMove } from "../../Hooks/usePageMove";

const layout = {
  wrapperCol: {
    span: 100,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "To input text is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

// Page 3 : 입력 창
export const Page3 = ({
  setIsResult,
  onClickHandler,
  outerDivRef,
  setCurrent,
}: {
  setIsResult: React.Dispatch<React.SetStateAction<boolean>>;
  onClickHandler: () => void;
  outerDivRef: React.RefObject<HTMLDivElement>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const context = useSelector((state: RootState) => state.dataReducer.context);

  const [text, setText] = useState<string>("");

  const clickRef1 = useRef<HTMLDivElement>(null);
  const clickRef2 = useRef<HTMLDivElement>(null);

  // console.log("[Page3] context :", context);

  usePageMove({
    ref: clickRef1,
    pageRef: outerDivRef,
    current: 1,
    setCurrent: setCurrent,
  });

  usePageMove({
    ref: clickRef2,
    pageRef: outerDivRef,
    current: 3,
    setCurrent: setCurrent,
  });

  const handleChange = (values: any) => {
    console.log(values.target.value);
    setText(values.target.value);
  };

  const handleSubmit = (values: any) => {
    console.log("Submit!!");
    setIsResult(true);
  };

  const handleClickDeleteText = () => {
    setText("");
  };

  return (
    <div className={cn(styles.inner, styles.tab3)} onClick={onClickHandler}>
      <Row>
      {context ? (
        <>
          <Card bordered={false}>
          <Statistic
            title={`Subject : "${context}"`}
            value={`Some people spend a lot of money attending cultural or sports events. 
              Is it a good or a bad thing? Give your opinion and examples from your own experience.`}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<QuestionCircleOutlined />}
            suffix=""
          />
        </Card>
        </>
      ) : <Empty description={'Select Subject First'}/>}
        
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Form
          {...layout}
          name="nest-messages"
          size="large"
          onChange={handleChange}
          // onFinish={handleSubmit}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "textarea"]}
            wrapperCol={{ ...layout.wrapperCol, offset: 0 }}
            rules={[{ required: true }]}
          >
            <Input.TextArea
              disabled={!context}
              style={{
                width: "100vw",
                maxHeight: "500px",
                minHeight: "200px",
              }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Button
                type="dashed"
                htmlType="reset"
                onClick={handleClickDeleteText}
              >
                Reset
              </Button>
              <div ref={clickRef2}>
                {text && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default Page3;
