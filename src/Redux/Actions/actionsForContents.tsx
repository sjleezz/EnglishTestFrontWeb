import * as type from '../Types'

// Action Types for Data
export const SET_TOTAL_NUM = "SET_TOTAL_NUM" as const;
export const SET_CURRENT_NUM = "SET_CURRENT_NUM" as const;
export const INCREASE_CURRENT_NUM = "INCREASE_CURRENT_NUM" as const;
export const DECREASE_CURRENT_NUM = "DECREASE_CURRENT_NUM" as const;
export const SET_CONTENTS = "SET_CONTENTS" as const;
export const SET_CONTENTS_1 = "SET_CONTENTS_1" as const;
export const SET_CONTENTS_2 = "SET_CONTENTS_2" as const;
export const SET_CONTENTS_3 = "SET_CONTENTS_3" as const;
export const SET_CONTENTS_4 = "SET_CONTENTS_4" as const;
export const SET_CONTENTS_5 = "SET_CONTENTS_5" as const;
export const SET_CONTENTS_6 = "SET_CONTENTS_6" as const;

// Actions for Data
export const setTotalNum = (payload : type.ContentsDataTotalNum) => {
    return {
        type : SET_TOTAL_NUM,
        payload: payload
    }
}
export const setCurrentNum = (payload : type.ContentsDataCurrentNum) => {
    return {
        type : SET_CURRENT_NUM,
        payload: payload
    }
}
export const increaseCurrentNum = () => {
    return {
        type : INCREASE_CURRENT_NUM,
    }
}
export const decreaseCurrentNum = () => {
    return {
        type : DECREASE_CURRENT_NUM,
    }
}
export const setContents = (payload : type.ContentsDataAll) => {
    return {
        type : SET_CONTENTS,
        payload: payload
    }
}
export const setContents1 = (payload : type.ContentsData1) => {
    return {
        type : SET_CONTENTS_1,
        payload: payload
    }
}
export const setContents2 = (payload : type.ContentsData2) => {
    return {
        type : SET_CONTENTS_2,
        payload: payload
    }
}
export const setContents3 = (payload : type.ContentsData3) => {
    return {
        type : SET_CONTENTS_3,
        payload: payload
    }
}
export const setContents4 = (payload : type.ContentsData4) => {
    return {
        type : SET_CONTENTS_4,
        payload: payload
    }
}
export const setContents5 = (payload : type.ContentsData5) => {
    return {
        type : SET_CONTENTS_5,
        payload: payload
    }
}
export const setContents6 = (payload : type.ContentsData6) => {
    return {
        type : SET_CONTENTS_6,
        payload: payload
    }
}
