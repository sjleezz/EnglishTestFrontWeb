import * as type from '../Types'

// Action Types for Theme
export const SET_THEME_BG = "SET_THEME_BG" as const;
export const SET_THEME_FC = "SET_THEME_FC" as const;
export const SET_THEME_WC = "SET_THEME_WC" as const;
export const SET_THEME_DM = "SET_THEME_DM" as const;

// Actions for Theme
export const setThemeBG = (payload : type.BackgroundColor) => {
    return {
        type : SET_THEME_BG,
        payload: payload
    }
}
export const setThemeFC = (payload : type.fontColor) => {
    return {
        type : SET_THEME_FC,
        payload: payload
    }
}
export const setThemeWC = (payload : type.windowColor) => {
    return {
        type : SET_THEME_WC,
        payload: payload
    }
}
export const setThemeDM = (payload : type.darkMode) => {
    return {
        type : SET_THEME_DM,
        payload: payload
    }
}