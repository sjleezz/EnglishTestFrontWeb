import * as type from "../Types";
import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as DataActions from "../Actions/actionsForData";
import * as ThemeActions from "../Actions/actionsForTheme";

export const initialDataState: type.State = {
  timeout: 10,
  authToken: ''
};

export const initialThemeState: type.Theme<
  string,
  boolean
> = {
  backgroundColor : '',
  fontColor : '',
  windowColor : '',
  darkMode : false
};

// Reducer for Data
export const dataReducer = createReducer<
  type.State,
  | type.changeStateData1Action
  | type.changeStateData2Action
  // | type.changeStateData3Action
  // | type.changeStateData4Action
>(initialDataState, {

  [DataActions.SET_TIME_OUT]: (state, action) =>
    produce(state, (draft) => {
      draft.timeout = action.payload;
    }),

  [DataActions.SET_AUTH_TOKEN]: (state, action) =>
    produce(state, (draft) => {
      draft.authToken = action.payload;
    }),

  // [DataActions.SET_DATA_3]: (state, action) =>
  //   produce(state, (draft) => {
  //     draft.data3 = action.payload;
  //   }),
  // [DataActions.SET_DATA_4]: (state, action) =>
  //   produce(state, (draft) => {
  //     draft.data4 = action.payload;
  //   }),
});

// Reducer for Theme
export const themeReducer = createReducer<
  type.Theme<string, boolean>,
  | type.changeBackgroundThemeAction
  | type.changeFontColorAction
  | type.changeWindowColorAction
  | type.changeDarkModeAction
>(initialThemeState, {
  [ThemeActions.SET_THEME_BG]: (state, action) =>
    produce(state, (draft) => {
      draft.backgroundColor = action.payload;
    }),
  [ThemeActions.SET_THEME_FC]: (state, action) =>
    produce(state, (draft) => {
      draft.fontColor = action.payload;
    }),
  [ThemeActions.SET_THEME_WC]: (state, action) =>
    produce(state, (draft) => {
      draft.windowColor = action.payload;
    }),
  [ThemeActions.SET_THEME_DM]: (state, action) =>
    produce(state, (draft) => {
      draft.darkMode = action.payload;
    }),
});
