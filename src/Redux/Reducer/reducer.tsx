import * as type from "../Types";
import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as DataActions from "../Actions/actionsForData";
import * as SpeechActions from "../Actions/actionsForSpeechPro";
import * as VocaActions from "../Actions/actionsForVocaPro";
import * as GrammarActions from "../Actions/actionsForGrammarPro";
import * as ThemeActions from "../Actions/actionsForTheme";
import GrammarProResponseData from '../../mocks/data/gpro_output_high'
import VocaProResponseData from '../../mocks/data/vpro_output_high'

// initialize states

export const initialDataState: type.State = {
  timeout: 10,
  authToken: '',
  authTokenForSpeechPro: '',
};

export const initialDataStateForSpeechProChapter: type.StateForSpeechProChapter = {
  speechproChapter: {
    chapters : []
  },
};
export const initialDataStateForSpeechProSentence: type.StateForSpeechProSentence = {
  speechproSentence: {
    sentences : []
  },
};
export const initialDataStateForVocaPro: type.StateForVocaPro = {
  vocapro: VocaProResponseData,
};
export const initialDataStateForGrammarPro: type.StateForGrammarPro = {
  grammarpro: GrammarProResponseData,
};

export const initialThemeState: type.Theme<
  string,
  boolean
> = {
  backgroundColor : '',
  fontColor : '',
  windowColor : '',
  darkMode : true
};

// Reducer for Data
export const dataReducer = createReducer<
  type.State,
  | type.changeStateData1Action
  | type.changeStateData2Action
  | type.changeStateData3Action
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

  [DataActions.SET_AUTH_TOKEN_FOR_SPEECH_PRO]: (state, action) =>
    produce(state, (draft) => {
      draft.authTokenForSpeechPro = action.payload;
    }),
  // [DataActions.SET_DATA_4]: (state, action) =>
  //   produce(state, (draft) => {
  //     draft.data4 = action.payload;
  //   }),
});

// Reducer for speechPro chapter
export const speechProChapterReducer = createReducer<
  type.StateForSpeechProChapter, type.changeStateSpeechProChapterAction
  // | type.changeStateData4Action
>(initialDataStateForSpeechProChapter, {
  [SpeechActions.SET_CHAPTER_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.speechproChapter = action.payload;
    }),
});

// Reducer for speechPro sentence
export const speechProSentenceReducer = createReducer<
  type.StateForSpeechProSentence, type.changeStateSpeechProSentenceAction
>(initialDataStateForSpeechProSentence, {
  [SpeechActions.SET_SENTENCE_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.speechproSentence = action.payload;
    }),
});

// Reducer for vocaPro
export const vocaProReducer = createReducer<
  type.StateForVocaPro, type.changeStateVocaAction
  // | type.changeStateData4Action
>(initialDataStateForVocaPro, {
  [VocaActions.SET_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.vocapro = action.payload;
    }),
});

// Reducer for grammarPro
export const grammarProReducer = createReducer<
  type.StateForGrammarPro, type.changeStateGrammarAction
  // | type.changeStateData4Action
>(initialDataStateForGrammarPro, {
  [GrammarActions.SET_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.grammarpro = action.payload;
    })
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
