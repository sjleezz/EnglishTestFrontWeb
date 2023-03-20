import * as type from '../Types'

// Action Types for Data
export const SET_TIME_OUT = "SET_TIME_OUT" as const;
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN" as const;
// export const SET_DATA_3 = "SET_DATA_3" as const;
// export const SET_DATA_4 = "SET_DATA_4" as const;

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
// export const setData3 = (payload : type.Data3) => {
//     return {
//         type : SET_DATA_3,
//         payload: payload
//     }
// }
// export const setData4 = (payload : type.Data4) => {
//     return {
//         type : SET_DATA_4,
//         payload: payload
//     }
// }
