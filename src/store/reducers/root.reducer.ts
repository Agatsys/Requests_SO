import { combineReducers } from "redux";
import questionsReducer from './questions.reducer'
import filterReducer from './filter.reducer'
import { QuestionsReducerState } from './questions.reducer'
import { FilterReducerState } from './filter.reducer'

export type AppState = {
    questions: QuestionsReducerState;
    filter: FilterReducerState;
}

const reducers = combineReducers({
    questions: questionsReducer,
    filter: filterReducer
});

export default reducers