import { combineReducers, configueStore } from '@reduxjs/toolkit'

import questionReducer from './question_reducer'
import { resultReducer } from './result_reducer'

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer
})

export default configueStore({ reducer: rootReducer })