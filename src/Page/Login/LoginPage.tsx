import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Reducer/rootReducer";
import {
  LockOutlined,
  UserOutlined,
  RadiusBottomrightOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Steps,
  Space,
  message,
} from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { Login } from "../../Login";
import { setAuthTokenLogin } from "../../Redux/Actions/actionsForData";
import styled from "styled-components";
import video from "../../assets/videos/video1.mp4";

const VideoComponent = styled.video`
  position: fixed;
  width: 1920px;
  min-width: 100%;
  min-height: 100%;
  // position:absolute;
  bottom:0;
  left:0;
  object-fit: cover;
  filter: grayscale(20%);
`;

const LoginPage: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState(""); // 'success | fail | error
  const [isRemember, setIsRemember] = useState(false);
  const [inputId, setInputId] = useState<string>("");
  const [inputPw, setInputPw] = useState<string>("");

  useEffect(() => {
    const localId = window.sessionStorage.getItem('loginId')
    if(localId) {
      setInputId(localId)
    }
  }, [])

  const authTokenLogin = useSelector(
    (state: RootState) => state.dataReducer.authTokenLogin
  );

  console.log("[Login] loginStatus :", loginStatus);

  // Dispatcher
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = (accessToken: string, status: string) => {
    console.log("[openMessage] status :", status);
    console.log("[openMessage] accessToken :", accessToken);
    switch (status) {
      case "success":
        messageApi.open({
          key,
          type: "success",
          content: "Welcome!",
          duration: 1,
          className: "custom-class",
          style: {
            marginTop: "10vh",
          },
          onClose: () => {
            dispatch(setAuthTokenLogin(accessToken));
            // go to Home
            window.location.href = "/Select";
          },
        });
        break;
      case "fail":
        messageApi.open({
          key,
          type: "warning",
          content: "Login is failed",
          className: "custom-class",
          style: {
            marginTop: "10vh",
          },
        });
        break;
      case "error":
        messageApi.open({
          key,
          type: "error",
          content: "Some problem has been occurred... please LogIn again",
          className: "custom-class",
          style: {
            marginTop: "10vh",
          },
        });
        break;
    }
  };

  const handleLogin = ({
    loginId,
    password,
  }: {
    loginId: string;
    password: string;
  }) => {
    Login({
      loginId: loginId,
      password: password,
    }).then((result: any) => {
      console.log("[handleLogin] result :", result);
      openMessage(result.data.accessToken, result.status);
      setLoginStatus(result.status);
      if(isRemember) {
        console.log('isRemember :', isRemember)
        window.sessionStorage.setItem('loginId', loginId)
      }
    });
  };

  const onChangeCheckedBoxHandler = (e: any) => {
    console.log("[onChangeHandler] Remeber? :", e.target.checked);
    setIsRemember(e.target.checked);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      {contextHolder}
      <VideoComponent muted={true} autoPlay={true} loop>
        <source src={video} type="video/mp4" />
        <strong>Your browser does not support the video tag.</strong>
      </VideoComponent>
      <Row justify={"center"} align={"middle"} style={{ height: "100vh"}}>
        <Space direction="vertical" align="center">
          <Row>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  value={inputId}
                  onChange={(e) => setInputId(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  value={inputPw}
                  onChange={(e) => setInputPw(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox
                    defaultChecked={false}
                    checked={isRemember}
                    onChange={onChangeCheckedBoxHandler}
                  >
                    Remember ID
                  </Checkbox>
                </Form.Item>
                <Button type="text" style={{ color: "blue" }}>
                  Forgot password
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  onClick={() => {
                    handleLogin({ loginId: inputId, password: inputPw });
                  }}
                >
                  Log in
                </Button>
                <Button type="text" style={{ width: "100%", color: "blue" }}>
                  Do you need some help?
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </Space>
      </Row>
    </>
  );
};

export default LoginPage;
