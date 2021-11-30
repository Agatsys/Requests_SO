import { answersAPI, questionAPI } from "../../api/api"
import { AppState } from 'store/reducers/root.reducer'


export const SET_QUESTIONS = "SET_QUESTIONS"
export const SET_ANSWERS = "SET_ANSWERS"
export const SET_TOTAL_QUESTIONS_COUNT = "SET_TOTAL_QUESTIONS_COUNT"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_PAGE_SIZE = "SET_PAGE_SIZE"
export const SET_SORT_RULES = "SET_SORT_RULES"
export const SET_TAG = "SET_TAG"
export const QUESTIONS_IS_FETCHING = "QUESTIONS_IS_FETCHING"
export const ANSWERS_IS_FETCHING = "ANSWERS_IS_FETCHING"


export const setCurrentPage = (currentPage) => (dispatch) =>{
    dispatch({ type: SET_CURRENT_PAGE, payload: currentPage })
    dispatch(getQuestions())
} 
export const setPageSize = (pageSize) => (dispatch) => {
    dispatch({ type: SET_PAGE_SIZE, payload: pageSize })
    dispatch(getQuestions())
} 
export const setTag = (tag) => (dispatch) => {
    dispatch({ type: SET_TAG, payload: tag })
    dispatch(getQuestions())
}
export const setSortRules = (sort) => (dispatch) =>{
    dispatch({ type: SET_SORT_RULES, payload: sort })
    dispatch(getQuestions())
} 
export const setTotalQuestionsCount = (totalQuestionsCount) => ({ type: SET_TOTAL_QUESTIONS_COUNT, payload: totalQuestionsCount })

export const setQuestions = (questions) => ({ type: SET_QUESTIONS, payload: questions })

export const setAnswers = (answers) => ({ type: SET_ANSWERS, payload: answers })



export const getQuestions = () => async (dispatch, getState: () => AppState) => {
    const { currentPage, pageSize, sort, tag } = getState().filter
    try {
        dispatch(questionsIsFetching(true));
        const data = await questionAPI.getQuestions(currentPage, pageSize, sort, tag)
        dispatch(questionsIsFetching(false));
        dispatch(setQuestions(data.items));
        dispatch(setTotalQuestionsCount(data.total));
    } catch(error) {
        console.error(error)
    }
}
export const getAnswers = (questionId) => async (dispatch) => {
    try {
        dispatch(answersIsFetching(true));
        const data = await answersAPI.getAnswers(questionId)
        dispatch(answersIsFetching(false));
        dispatch(setAnswers(data.items));
    } catch(error) {
        console.error(error)
    }
} 


export const questionsIsFetching = (isFetching) => ({ type: QUESTIONS_IS_FETCHING, payload: isFetching })

export const answersIsFetching = (isFetching) => ({ type: ANSWERS_IS_FETCHING, payload: isFetching })

