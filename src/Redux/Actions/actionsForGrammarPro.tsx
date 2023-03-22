import * as type from '../Types'

// Action Types for Data
export const SET_DATA = "SET_DATA" as const;

// Actions for Data
export const setGrammarData = (payload : type.GrammarProDataType) => {
    return {
        type : SET_DATA,
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
