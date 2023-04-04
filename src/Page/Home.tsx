import React, { useState } from "react";
import { useSelector } from "react-redux";
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   HomeOutlined,
//   WalletOutlined,
//   UserOutlined,
//   CommentOutlined,
// } from "@ant-design/icons";
import { Layout, Menu, MenuProps, Switch, Space } from "antd";
import { MenuList, MenuListArray } from "../index.d";
import Main from "../Page/Main";
import MainWindow from "../Page/WindowView/MainWindow";
import { RootState } from "../Redux/Reducer/rootReducer";
import { UniversalAuth } from "../Component/UniversalAuth";
import { useDispatch } from "react-redux";
import { setThemeDM } from "../Redux/Actions/actionsForTheme";

export const DarkColor = "rgba(0, 55, 101, 1)";
export const LightColor = "rgba(255, 255, 255, 1)";

export const Home = () => {
  const [mode, setMode] = useState<number>(0);

  // Read-only
  const state = useSelector((state: RootState) => state.dataReducer);
  const darkMode = useSelector(
    (state: RootState) => state.themeReducer.darkMode
  );

  const dispatch = useDispatch();

  console.log("[Home] mode", mode);
  console.log("[Home] state", state);

  // const itemBuilder = (
  //   MenuListArray: string[],
  //   onClickCallback: (i: number) => void
  // ): MenuProps["items"] =>
  //   [
  //     HomeOutlined,
  //     UserOutlined,
  //     WalletOutlined,
  //     CommentOutlined,
  //     BarChartOutlined,
  //     CloudOutlined,
  //     AppstoreOutlined,
  //     TeamOutlined,
  //     ShopOutlined,
  //   ]
  //     .map((icon, index) => {
  //       if (MenuListArray.length <= index) {
  //         return null;
  //       } else {
  //         return {
  //           key: String(index + 1),
  //           icon: React.createElement(icon),
  //           label: MenuListArray[index],
  //           onClick: () => {
  //             console.log(MenuListArray[index]);
  //             onClickCallback(index);
  //           },
  //         };
  //       }
  //     })
  //     .filter((el) => el);

  // const handleClickMenu = (menu: number) => {
  //   switch (menu) {
  //     case MenuList.SpeechPro:
  //       setMode(MenuList.SpeechPro);
  //       break;
  //     default:
  //       setMode(MenuList.Main);
  //       break;
  //   }
  // };

  // const changeTheme = () => {
  //   dispatch(setThemeDM(!darkMode));
  // };

  return (
    <Space
      align="center"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {!state.authToken && <UniversalAuth />}
      {mode === MenuList.Main && <MainWindow />}
    </Space>
  );
};

export default Home;
