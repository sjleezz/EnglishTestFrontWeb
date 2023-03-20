import { MenuList } from "../index.d";
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Reducer/rootReducer";
import { setTimeout } from "../Redux/Actions/actionsForData";
import Home from "./Home";
import Frame from "./Frame";
import UniversalAuth from "../Component/UniversalAuth";

export const GateWay = () => {
  // Read-only
  const states = {
    timeout: useSelector((state: RootState) => state.dataReducer.timeout),
    authToken: useSelector((state: RootState) => state.dataReducer.authToken),
    // data3: useSelector((state: RootState) => state.dataReducer.data3),
    // data4: useSelector((state: RootState) => state.dataReducer.data4),
  };

  // Dispatcher
  const dispatch = useDispatch();
  const setData = useCallback(
    (data: any, type: any) => {
      switch (type) {
        case "string":
          dispatch(setTimeout(data));
          break;
        case "number":
          dispatch(setTimeout(data));
          break;
        case "boolean":
          dispatch(setTimeout(data));
          break;
        default:
          throw Error("[GateWay] Error : type check error");
      }
    },
    [dispatch]
  );

  const [mode, setMode] = useState<number>(0);
  const [next, setNext] = useState<boolean>(false);

  console.log(
    `[GateWay] authToken : ${states.authToken}`
  );

  return (
    <>
      {!next ? (
        <>
          <Home setNext={setNext} />
           <UniversalAuth />
        </>
      ) : (
        <Frame mode={mode} setMode={setMode} />
      )}
    </>
  );
};

export default GateWay;
