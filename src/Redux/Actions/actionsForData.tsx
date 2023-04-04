import * as type from '../Types'

// Action Types for Data
export const SET_TIME_OUT = "SET_TIME_OUT" as const;
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN" as const;
export const SET_AUTH_TOKEN_FOR_SPEECH_PRO = "SET_AUTH_TOKEN_FOR_SPEECH_PRO" as const;
export const SET_AUTH_TOKEN_LOGIN = "SET_AUTH_TOKEN_LOGIN" as const;
export const SET_MODE = "SET_MODE" as const;
export const SET_CONTEXT = "SET_CONTEXT" as const;
export const SET_IS_RECORDING = "SET_IS_RECORDING" as const;
export const SET_WINDOW_NUM = "SET_WINDOW_NUM" as const;
export const INCREASE_WINDOW_NUM = "INCREASE_WINDOW_NUM" as const;
export const DECREASE_WINDOW_NUM = "DECREASE_WINDOW_NUM" as const;

// Actions for Data
export const setTimeout = (payload : type.Data1) => {
    return {
        type : SET_TIME_OUT,
        payload: payload
    }
}
export const setAuthToken = (payload : type.Data2) => {
    return {
        type : SET_AUTH_TOKEN,
        payload: payload
    }
}
export const setAuthTokenForSpeechPro = (payload : type.Data3) => {
    return {
        type : SET_AUTH_TOKEN_FOR_SPEECH_PRO,
        payload: payload
    }
}
export const setAuthTokenLogin = (payload : type.Data4) => {
    return {
        type : SET_AUTH_TOKEN_LOGIN,
        payload: payload
    }
}
export const setMode = (payload : type.Data5) => {
    return {
        type : SET_MODE,
        payload: payload
    }
}
export const setContext = (payload : type.Data6) => {
    return {
        type : SET_CONTEXT,
        payload: payload
    }
}
export const setIsRecording = (payload : type.Data7) => {
    return {
        type : SET_IS_RECORDING,
        payload: payload
    }
}
export const setWindowNum = (payload : type.Data8) => {
    return {
        type : SET_WINDOW_NUM,
        payload: payload
    }
}
export const increaseWindowNum = () => {
    return {
        type : INCREASE_WINDOW_NUM,
    }
}
export const decreaseWindowNum = () => {
    return {
        type : DECREASE_WINDOW_NUM,
    }
}
