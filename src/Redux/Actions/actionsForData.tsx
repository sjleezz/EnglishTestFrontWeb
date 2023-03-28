import * as type from '../Types'

// Action Types for Data
export const SET_TIME_OUT = "SET_TIME_OUT" as const;
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN" as const;
export const SET_AUTH_TOKEN_FOR_SPEECH_PRO = "SET_AUTH_TOKEN_FOR_SPEECH_PRO" as const;
export const SET_AUTH_TOKEN_LOGIN = "SET_AUTH_TOKEN_LOGIN" as const;
export const SET_MODE = "SET_MODE" as const;
export const SET_CONTEXT = "SET_CONTEXT" as const;

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
