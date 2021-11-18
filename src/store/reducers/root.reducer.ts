import questionsReducer from './questions.reducer'
import answersReducer from "./answers.reducer";
import filterReducer from './filter.reducer'
import { combineReducers } from "redux";
import { QuestionsReducerState } from './questions.reducer'
import { FilterReducerState } from './filter.reducer'


export type AppState = {
    questions: QuestionsReducerState;
    filter: FilterReducerState;
}

const reducers = combineReducers({
    questions: questionsReducer,
    answers: answersReducer,
    filter: filterReducer
});

export default reducers