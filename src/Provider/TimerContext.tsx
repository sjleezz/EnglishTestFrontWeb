import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Reducer/rootReducer";

type CustomUseState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

interface ContextType<T> {
  (): CustomUseState<T>;
}

export interface TimerDataState<T, R> {
  minutes: T;
  seconds: T;
  isClear: R;
}

const initialTimer: TimerDataState<number, boolean> = {
  minutes: 0,
  seconds: 30,
  isClear: false,
};

const initialTimerUseState: ContextType<
  TimerDataState<number, boolean>
> = (): CustomUseState<TimerDataState<number, boolean>> => {
  const TimerMode = initialTimer;
  const setTimerMode: React.Dispatch<
    React.SetStateAction<TimerDataState<number, boolean>>
  > = () => {};
  return [TimerMode, setTimerMode];
};

const TimerContext = createContext<
  CustomUseState<TimerDataState<number, boolean>>
>(initialTimerUseState());

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [TimerMode, setTimerMode] = useState(initialTimer);
  const states = {
    timeout: useSelector((state: RootState) => state.dataReducer.timeout),
  };

//   console.log(
//     `[TimerProvider] 

//     ### Timer ### 
//     ## ${TimerMode.minutes}m  ${TimerMode.seconds}s ##
//     ##  ${TimerMode.isClear}  ##
//     #############`
//   );

  useEffect(() => {
    if (TimerMode.isClear) {
      console.log('[TimerMode] TimerMode.isClear :', TimerMode.isClear)
      setTimerMode({
        minutes: states.timeout,
        seconds: 1,
        isClear: false,
      });
    }
  }, [TimerMode.isClear]);

  useEffect(() => {
    if (states.timeout) {
      setTimerMode((prev) => ({
        ...prev,
        minutes: states.timeout,
        seconds: 1,
      }));
    }
  }, [states.timeout]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (TimerMode.minutes > 0) {
        if (TimerMode.seconds <= 0) {
          setTimerMode((prev) => ({
            ...prev,
            minutes: prev.minutes - 1,
          }));
          setTimerMode((prev) => ({
            ...prev,
            seconds: 59,
          }));
        } else {
          setTimerMode((prev) => ({
            ...prev,
            seconds: prev.seconds - 1,
          }));
        }
      } else {
        if (TimerMode.seconds <= 0) {
          clearInterval(countdown);
          setTimerMode((prev) => ({
            ...prev,
            minutes: states.timeout,
            seconds: 0,
            isClear: true,
          }));
        } else {
          setTimerMode((prev) => ({
            ...prev,
            seconds: prev.seconds - 1,
          }));
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [TimerMode.seconds]);

  return (
    <TimerContext.Provider value={[TimerMode, setTimerMode]}>
      {children}
    </TimerContext.Provider>
  );
};

// export const ProtectedRoute = ({ children } : {Children : React.FC}) => {
//   return children;
// };

export const useTimer = () => {
  const context = useContext(TimerContext);
  return context;
};
