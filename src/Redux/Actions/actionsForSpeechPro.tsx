import * as type from '../Types'

// Action Types for Data
export const SET_CHAPTER_DATA = "SET_CHAPTER_DATA" as const;
export const SET_SENTENCE_DATA = "SET_SENTENCE_DATA" as const;

// Actions for Data
export const setChapters = (payload : type.SpeechProChapterDataType) => {
    return {
        type : SET_CHAPTER_DATA,
        payload: payload
    }
}
export const setSentences = (payload : type.SpeechProSentenceDataType) => {
    return {
        type : SET_SENTENCE_DATA,
        payload: payload
    }
}
