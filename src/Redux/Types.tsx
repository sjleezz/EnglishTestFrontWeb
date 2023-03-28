import * as DataActions from "./Actions/actionsForData";
import * as SpeechProActions from "./Actions/actionsForSpeechPro";
import * as VocaProActions from "./Actions/actionsForVocaPro";
import * as GrammarProActions from "./Actions/actionsForGrammarPro";
import * as ThemeActions from "./Actions/actionsForTheme";
import { SubjectType } from '../index.d'

//******************************* **********************************//
//******************************* **********************************//
//** For Data **//
//******************************* **********************************//
//******************************* **********************************//

export type Data1 = number;
export type Data2 = string;
export type Data3 = string;
export type Data4 = string;
export type Data5 = string;
export type Data6 = SubjectType;

export interface State {
  timeout: Data1;
  authToken: Data2;
  authTokenForSpeechPro: Data3;
  authTokenLogin: Data4;
  mode: Data5;
  context : Data6
}

export type changeStateData1Action = ReturnType<typeof DataActions.setTimeout>;
export type changeStateData2Action = ReturnType<
  typeof DataActions.setAuthToken
>;
export type changeStateData3Action = ReturnType<
  typeof DataActions.setAuthTokenForSpeechPro
>;
export type changeStateData4Action = ReturnType<
  typeof DataActions.setAuthTokenLogin
>;
export type changeStateData5Action = ReturnType<
  typeof DataActions.setMode
>;
export type changeStateData6Action = ReturnType<
  typeof DataActions.setContext
>;

//******************************* **********************************//
//******************************* **********************************//
//** For 3 Pro **//
//******************************* **********************************//
//******************************* **********************************//

export interface Chapter {
  id : number,
  name : string
}

export interface Sentence {
  chapterId : number,
  id : number,
  ipa : string,
  isWave : boolean,
  letters : string,
  modelGraph : string,
  phonemes : string,
  status : number,
  text : string,
  textId : string,
  textNormalized : string, 
  wave : string,
  words : string
}

export interface SpeechProChapterDataType {
  chapters: Chapter[];
}
export interface SpeechProSentenceDataType {
  sentences: Sentence[];
}

export interface SentenceSummaryType {
  sentence_num_words: number;
  sentence_cefr: string;
  sentence_word_list_by_cefr: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
    unk: string[];
    stopwords: string[];
  };
  sentence_word_count_by_cefr: {
    A1: number;
    A2: number;
    B1: number;
    B2: number;
    C1: number;
    C2: number;
    unk: number;
    stopwords: number;
  };
  sentence_word_distribution_by_cefr: {
    A1: number;
    A2: number;
    B1: number;
    B2: number;
    C1: number;
    C2: number;
    unk: number;
    stopwords: number;
  };
}

export interface DescriptionType {
  level: string;
  pos: string;
  guideword: string;
  definition: string,
  dictionary_example: string[];
  learner_example: string[];
}

export interface SynonymType {
  word: string,
  cefr: string,
  html_description: string
}

export interface WordsDetailType {
  word_idx: number;
  raw_word: string;
  cefr: string;
  stopword: boolean;
  word: string;
  lemma: string;
  pos: string;
  html_description: string;
  description: DescriptionType[];
  synonym : SynonymType[]
}

export interface SentsDetailType {
  sent_idx: number;
  raw_sentence: string;
  sentence: string;
  sentence_summary: SentenceSummaryType;
  words_detail: WordsDetailType[];
}

export interface VocaProDataType {
  total_summary: {
    total_cefr: string;
    num_sentences: number;
    total_num_words: number;
    mean_words_per_sentence: number;
    total_word_list_by_cefr: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
      unk: string[];
      stopwords: string[];
    };
    total_word_count_by_cefr: {
      A1: number;
      A2: number;
      B1: number;
      B2: number;
      C1: number;
      C2: number;
      unk: number;
      stopwords: number;
    };
    total_word_distribution_by_cefr: {
      A1: number;
      A2: number;
      B1: number;
      B2: number;
      C1: number;
      C2: number;
      unk: number;
      stopwords: number;
    };
  };
  sents_detail: SentsDetailType[];
}

export interface ChangeWordType {
  idx_start: number;
  idx_end: number;
  before_change: string;
  after_change: string;
  cefr: string;
  change_type: string;
  error_type: string;
  description: string;
  change_idx: number;
}

export interface GrammarProDataType {
  success: string;
  data: {
    full_input: string;
    full_output: string;
    changes: ChangeWordType[];
    total_summary: {
      total_cefr: string;
      total_words: number;
      change_ct_by_level: {
        B1: number;
        B2: number;
        A2: number;
        C1: number;
      };
    };
  };
}

export interface StateForSpeechProChapter {
  speechproChapter: SpeechProChapterDataType;
}

export interface StateForSpeechProSentence {
  speechproSentence: SpeechProSentenceDataType;
}

export interface StateForVocaPro {
  vocapro: VocaProDataType;
}

export interface StateForGrammarPro {
  grammarpro: GrammarProDataType;
}

export type changeStateSpeechProChapterAction = ReturnType<
  typeof SpeechProActions.setChapters
>;

export type changeStateSpeechProSentenceAction = ReturnType<
  typeof SpeechProActions.setSentences
>;

export type changeStateVocaAction = ReturnType<typeof VocaProActions.setVocaData>;

export type changeStateGrammarAction = ReturnType<
  typeof GrammarProActions.setGrammarData
>;

//******************************* **********************************//
//******************************* **********************************//
//** For Theme **//
//******************************* **********************************//
//******************************* **********************************//

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
