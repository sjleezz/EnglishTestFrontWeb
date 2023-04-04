import { combineReducers } from "@reduxjs/toolkit";
import {
  dataReducer,
  contentsReducer,
  speechProChapterReducer,
  speechProSentenceReducer,
  vocaProReducer,
  grammarProReducer,
  themeReducer,
} from "./reducer";

const rootReducer = combineReducers({
  // reducer1, reducer2, reducer3, reducer4
  dataReducer,
  contentsReducer,
  speechProChapterReducer,
  speechProSentenceReducer,
  vocaProReducer,
  grammarProReducer,
  themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
