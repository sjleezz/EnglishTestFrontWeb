import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducer/rootReducer'

export default configureStore({
  reducer: rootReducer,
})