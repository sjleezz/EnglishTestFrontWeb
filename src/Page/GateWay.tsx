import { MenuList } from "../index.d";
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Reducer/rootReducer";
import { setTimeout } from "../Redux/Actions/actionsForData";
import Intro from "./Intro";
import Home from "./Home";
import UniversalAuth from "../Component/UniversalAuth";

export const GateWay = () => {
 
  return (
    <div>
      <Intro />
      
    </div>
  );
};

export default GateWay;
