import * as type from "../Types";
import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as DataActions from "../Actions/actionsForData";
import * as ContentsActions from "../Actions/actionsForContents";
import * as SpeechActions from "../Actions/actionsForSpeechPro";
import * as VocaActions from "../Actions/actionsForVocaPro";
import * as GrammarActions from "../Actions/actionsForGrammarPro";
import * as ThemeActions from "../Actions/actionsForTheme";
import GrammarProResponseData from "../../mocks/data/gpro_output_high";
import VocaProResponseData from "../../mocks/data/vpro_output_high";

// initialize states

export const initialDataState: type.State = {
  timeout: 10,
  authToken: "",
  authTokenForSpeechPro: "",
  authTokenLogin: "",
  mode: "",
  context: "",
  isRecording: false,
  windowNum: {
    currentNum : 1,
    totalNum : 6
  }, 
};

export const initialContentsState: type.ContentsState = {
  totalNum: 12,
  currentNum: 1,
  contents: {
    contents : []
  },
  contents1: [],
  contents2: [],
  contents3: [],
  contents4: [],
  contents5: [],
  contents6: [],
};

export const initialDataStateForSpeechProChapter: type.StateForSpeechProChapter =
  {
    speechproChapter: {
      chapters: [],
    },
  };
export const initialDataStateForSpeechProSentence: type.StateForSpeechProSentence =
  {
    speechproSentence: {
      sentences: [],
    },
  };
export const initialDataStateForVocaPro: type.StateForVocaPro = {
  vocapro: VocaProResponseData,
};
export const initialDataStateForGrammarPro: type.StateForGrammarPro = {
  grammarpro: GrammarProResponseData,
};

export const initialThemeState: type.Theme<string, boolean> = {
  backgroundColor: "",
  fontColor: "",
  windowColor: "",
  darkMode: true,
};

// Reducer for Data
export const dataReducer = createReducer<
  type.State,
  | type.changeStateData1Action
  | type.changeStateData2Action
  | type.changeStateData3Action
  | type.changeStateData4Action
  | type.changeStateData5Action
  | type.changeStateData6Action
  | type.changeStateData7Action
  | type.changeStateData8Action
  | type.changeStateIncData8Action
  | type.changeStateDecData8Action
>(initialDataState, {
  [DataActions.SET_TIME_OUT]: (state, action) =>
    produce(state, (draft) => {
      draft.timeout = action.payload;
    }),

  [DataActions.SET_AUTH_TOKEN]: (state, action) =>
    produce(state, (draft) => {
      draft.authToken = action.payload;
    }),

  [DataActions.SET_AUTH_TOKEN_FOR_SPEECH_PRO]: (state, action) =>
    produce(state, (draft) => {
      draft.authTokenForSpeechPro = action.payload;
    }),
  [DataActions.SET_AUTH_TOKEN_LOGIN]: (state, action) =>
    produce(state, (draft) => {
      draft.authTokenLogin = action.payload;
    }),
  [DataActions.SET_MODE]: (state, action) =>
    produce(state, (draft) => {
      draft.mode = action.payload;
    }),
  [DataActions.SET_CONTEXT]: (state, action) =>
    produce(state, (draft) => {
      draft.context = action.payload;
    }),
  [DataActions.SET_IS_RECORDING]: (state, action) =>
    produce(state, (draft) => {
      draft.isRecording = action.payload;
    }),
  [DataActions.SET_WINDOW_NUM]: (state, action) =>
    produce(state, (draft) => {
      draft.windowNum = action.payload;
    }),
  [DataActions.INCREASE_WINDOW_NUM]: (state, action) =>
    produce(state, (draft) => {
      if (state.windowNum.currentNum < state.windowNum.totalNum) {
        draft.windowNum.currentNum = state.windowNum.currentNum + 1;
      } else {
        draft.windowNum.currentNum = state.windowNum.currentNum;
      }
    }),
  [DataActions.DECREASE_WINDOW_NUM]: (state, action) =>
    produce(state, (draft) => {
      if (state.windowNum.currentNum > 1) {
        draft.windowNum.currentNum = state.windowNum.currentNum - 1;
      } else {
        draft.windowNum.currentNum = state.windowNum.currentNum;
      }
    }),
});

// Reducer for Contents
export const contentsReducer = createReducer<
  type.ContentsState,
  | type.changeStateTotalNumAction
  | type.changeStateCurrentNumAction
  | type.changeStateIncreaseAction
  | type.changeStateDecreaseAction
  | type.changeStateContents1Action
  | type.changeStateContents2Action
  | type.changeStateContents3Action
  | type.changeStateContents4Action
  | type.changeStateContents5Action
  | type.changeStateContents6Action
  | type.changeStateContentsAllAction
>(initialContentsState, {
  [ContentsActions.SET_TOTAL_NUM]: (state, action) =>
    produce(state, (draft) => {
      draft.totalNum = action.payload;
    }),
  [ContentsActions.SET_CURRENT_NUM]: (state, action) =>
    produce(state, (draft) => {
      draft.currentNum = action.payload;
    }),
  [ContentsActions.INCREASE_CURRENT_NUM]: (state, action) =>
    produce(state, (draft) => {
      if (state.currentNum < state.totalNum) {
        draft.currentNum = state.currentNum + 1;
      } else {
        draft.currentNum = state.currentNum;
      }
    }),
  [ContentsActions.DECREASE_CURRENT_NUM]: (state, action) =>
    produce(state, (draft) => {
      if (state.currentNum > 0) {
        draft.currentNum = state.currentNum - 1;
      } else {
        draft.currentNum = state.currentNum;
      }
    }),
  [ContentsActions.SET_CONTENTS]: (state, action) =>
    produce(state, (draft) => {
      draft.contents = action.payload;
    }),
  [ContentsActions.SET_CONTENTS_1]: (state, action) =>
    produce(state, (draft) => {
      draft.contents1 = action.payload;
    }),
  [ContentsActions.SET_CONTENTS_2]: (state, action) =>
    produce(state, (draft) => {
      draft.contents2 = action.payload;
    }),
  [ContentsActions.SET_CONTENTS_3]: (state, action) =>
    produce(state, (draft) => {
      draft.contents3 = action.payload;
    }),
  [ContentsActions.SET_CONTENTS_4]: (state, action) =>
    produce(state, (draft) => {
      draft.contents4 = action.payload;
    }),
  [ContentsActions.SET_CONTENTS_5]: (state, action) =>
    produce(state, (draft) => {
      draft.contents5 = action.payload;
    }),
  [ContentsActions.SET_CONTENTS_6]: (state, action) =>
    produce(state, (draft) => {
      draft.contents6 = action.payload;
    }),
});

// Reducer for speechPro chapter
export const speechProChapterReducer = createReducer<
  type.StateForSpeechProChapter,
  type.changeStateSpeechProChapterAction
  // | type.changeStateData4Action
>(initialDataStateForSpeechProChapter, {
  [SpeechActions.SET_CHAPTER_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.speechproChapter = action.payload;
    }),
});

// Reducer for speechPro sentence
export const speechProSentenceReducer = createReducer<
  type.StateForSpeechProSentence,
  type.changeStateSpeechProSentenceAction
>(initialDataStateForSpeechProSentence, {
  [SpeechActions.SET_SENTENCE_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.speechproSentence = action.payload;
    }),
});

// Reducer for vocaPro
export const vocaProReducer = createReducer<
  type.StateForVocaPro,
  type.changeStateVocaAction
  // | type.changeStateData4Action
>(initialDataStateForVocaPro, {
  [VocaActions.SET_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.vocapro = action.payload;
    }),
});

// Reducer for grammarPro
export const grammarProReducer = createReducer<
  type.StateForGrammarPro,
  type.changeStateGrammarAction
  // | type.changeStateData4Action
>(initialDataStateForGrammarPro, {
  [GrammarActions.SET_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.grammarpro = action.payload;
    }),
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
