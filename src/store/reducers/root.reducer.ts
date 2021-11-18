import { combineReducers } from "redux";
import answersReducer, { AnswersReducerState } from "./answers.reducer";
import questionsReducer, { QuestionsReducerState } from './questions.reducer'
import filterReducer, { FilterReducerState } from './filter.reducer'


export type AppState = {
    questions: QuestionsReducerState;
    filter: FilterReducerState;
    answers: AnswersReducerState;
}

const reducers = combineReducers({
    questions: questionsReducer,
    answers: answersReducer,
    filter: filterReducer
});

export default reducers