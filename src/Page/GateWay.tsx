import { useEffect } from "react";

export const GateWay = () => {
  useEffect(() => {
    const isLogin = window.localStorage.getItem("isLogin");
    if (isLogin) {
      window.location.href = "/Home";
    } else {
      window.location.href = "/Login";
    }
  });

  return null;
};

export default GateWay;
