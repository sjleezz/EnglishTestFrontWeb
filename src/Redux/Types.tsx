import * as DataActions from "./Actions/actionsForData";
import * as ThemeActions from "./Actions/actionsForTheme";

//** For Data **//

export type Data1 = number;
export type Data2 = string;
// export type Data3 = boolean;
// export type Data4 = any[];

export interface State {
  timeout: Data1;
  authToken: Data2;
//   data3: S;
//   data4: Q;
}

export type changeStateData1Action = ReturnType<typeof DataActions.setTimeout>;
export type changeStateData2Action = ReturnType<typeof DataActions.setAuthToken>;
// export type changeStateData3Action = ReturnType<typeof DataActions.setData3>;
// export type changeStateData4Action = ReturnType<typeof DataActions.setData4>;


//** For Theme **//

export type BackgroundColor = string;
export type fontColor = string;
export type windowColor = string;
export type darkMode = boolean;

export interface Theme<T = string, R = boolean> {
    backgroundColor: T;
    fontColor: T;
    windowColor: T;
    darkMode: R;
  }

export type changeBackgroundThemeAction = ReturnType<
  typeof ThemeActions.setThemeBG
>;
export type changeFontColorAction = ReturnType<typeof ThemeActions.setThemeFC>;
export type changeWindowColorAction = ReturnType<
  typeof ThemeActions.setThemeWC
>;
export type changeDarkModeAction = ReturnType<typeof ThemeActions.setThemeDM>;
