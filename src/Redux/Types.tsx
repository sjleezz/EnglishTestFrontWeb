import * as DataActions from "./Actions/actionsForData";
import * as ContentsActions from "./Actions/actionsForContents";
import * as SpeechProActions from "./Actions/actionsForSpeechPro";
import * as VocaProActions from "./Actions/actionsForVocaPro";
import * as GrammarProActions from "./Actions/actionsForGrammarPro";
import * as ThemeActions from "./Actions/actionsForTheme";
import { SubjectType } from "../index.d";

//******************************* **********************************//
//******************************* **********************************//
//** For requisite Data **//
//******************************* **********************************//
//******************************* **********************************//

export type Data1 = number;
export type Data2 = string;
export type Data3 = string;
export type Data4 = string;
export type Data5 = string;
export type Data6 = SubjectType;
export type Data7 = boolean;
export interface Data8 {
  currentNum : number,
  totalNum : number
};

export interface State {
  timeout: Data1;
  authToken: Data2;
  authTokenForSpeechPro: Data3;
  authTokenLogin: Data4;
  mode: Data5;
  context: Data6;
  isRecording: Data7;
  windowNum: Data8;
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
export type changeStateData5Action = ReturnType<typeof DataActions.setMode>;
export type changeStateData6Action = ReturnType<typeof DataActions.setContext>;
export type changeStateData7Action = ReturnType<typeof DataActions.setIsRecording>;
export type changeStateData8Action = ReturnType<typeof DataActions.setWindowNum>;
export type changeStateIncData8Action = ReturnType<typeof DataActions.increaseWindowNum>;
export type changeStateDecData8Action = ReturnType<typeof DataActions.decreaseWindowNum>;

//******************************* **********************************//
//** For Main Contents Scenario Data **//
//******************************* **********************************//
//******************************* **********************************//

export type ContentsDataTotalNum = number;
export type ContentsDataCurrentNum = number;
export type ContentsData1 = any[];
export type ContentsData2 = any[];
export type ContentsData3 = any[];
export type ContentsData4 = any[];
export type ContentsData5 = any[];
export type ContentsData6 = any[];
export interface ContentsDataAll {
  contents : any[]
};


export interface ContentsState {
  totalNum : ContentsDataTotalNum;
  currentNum : ContentsDataCurrentNum;
  contents1: ContentsData1;
  contents2: ContentsData2;
  contents3: ContentsData3;
  contents4: ContentsData4;
  contents5: ContentsData5;
  contents6: ContentsData6;
  contents: ContentsDataAll;
}

export type changeStateTotalNumAction = ReturnType<typeof ContentsActions.setTotalNum>;
export type changeStateIncreaseAction = ReturnType<typeof ContentsActions.increaseCurrentNum>;
export type changeStateDecreaseAction = ReturnType<typeof ContentsActions.decreaseCurrentNum>;
export type changeStateCurrentNumAction = ReturnType<typeof ContentsActions.setCurrentNum>;
export type changeStateContents1Action = ReturnType<typeof ContentsActions.setContents1>;
export type changeStateContents2Action = ReturnType<typeof ContentsActions.setContents2>;
export type changeStateContents3Action = ReturnType<typeof ContentsActions.setContents3>;
export type changeStateContents4Action = ReturnType<typeof ContentsActions.setContents4>;
export type changeStateContents5Action = ReturnType<typeof ContentsActions.setContents5>;
export type changeStateContents6Action = ReturnType<typeof ContentsActions.setContents6>;
export type changeStateContentsAllAction = ReturnType<typeof ContentsActions.setContents>;


//******************************* **********************************//
//******************************* **********************************//
//** For 3 Pro **//
//******************************* **********************************//
//******************************* **********************************//

export interface Chapter {
  id: number;
  name: string;
}

export interface Sentence {
  chapterId: number;
  id: number;
  ipa: string;
  isWave: boolean;
  letters: string;
  modelGraph: string;
  phonemes: string;
  status: number;
  text: string;
  textId: string;
  textNormalized: string;
  wave: string;
  words: string;
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
  definition: string;
  dictionary_example: string[];
  learner_example: string[];
}

export interface SynonymType {
  word: string;
  cefr: string;
  html_description: string;
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
  synonym: SynonymType[];
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

export interface GrammarProDataFieldType {
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
}

export interface GrammarProDataType {
  success: string;
  data: GrammarProDataFieldType;
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

export type changeStateVocaAction = ReturnType<
  typeof VocaProActions.setVocaData
>;

export type changeStateGrammarAction = ReturnType<
  typeof GrammarProActions.setGrammarData
>;

//** Sample Data */
export const sampleWordsDetail : WordsDetailType = {
  word_idx: 0,
  raw_word: "",
  cefr: "",
  stopword: false,
  word: "",
  lemma: "",
  pos: "",
  html_description: "",
  description: [],
  synonym: [],
};

export const sampleChangeWord = {
  idx_start: 0,
  idx_end: 0,
  before_change: "",
  after_change: "",
  cefr: "",
  change_type: "",
  error_type: "",
  description: "",
  change_idx: 0,
};

export const sampleSentsDetail : SentsDetailType = {
  sent_idx: 0,
  raw_sentence: "",
  sentence: "",
  sentence_summary: {
    sentence_num_words: 0,
  sentence_cefr: "",
  sentence_word_list_by_cefr: {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: [],
    unk: [],
    stopwords: [],
  },
  sentence_word_count_by_cefr: {
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0,
    C1: 0,
    C2: 0,
    unk: 0,
    stopwords: 0,
  },
  sentence_word_distribution_by_cefr: {
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0,
    C1: 0,
    C2: 0,
    unk: 0,
    stopwords: 0,
  }
  },
  words_detail: Array(10).fill(sampleWordsDetail),
};

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
