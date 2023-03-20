import { combineReducers } from "@reduxjs/toolkit";
import { dataReducer, themeReducer } from "./reducer";

const rootReducer = combineReducers({ 
    // reducer1, reducer2, reducer3, reducer4 
    dataReducer,
    themeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;