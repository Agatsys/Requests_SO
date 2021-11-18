import { answersAPI, questionAPI } from "../../api/api"


export const SET_QUESTIONS = "SET_QUESTIONS"
export const SET_ANSWERS = "SET_ANSWERS"
export const QUESTIONS_IS_FETCHING = "QUESTIONS_IS_FETCHING"
export const ANSWERS_IS_FETCHING = "ANSWERS_IS_FETCHING"
export const SET_TOTAL_QUESTIONS_COUNT = "SET_TOTAL_QUESTIONS_COUNT"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_PAGE_SIZE = "SET_PAGE_SIZE"
export const SET_SORT_RULES = "SET_SORT_RULES"


export const setQuestions = (questions) => ({ type: SET_QUESTIONS, payload: questions })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage })

export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, payload: pageSize })

export const questionsIsFetching = (isFetching) => ({ type: QUESTIONS_IS_FETCHING, payload: isFetching })

export const setTotalQuestionsCount = (totalQuestionsCount) => ({ type: SET_TOTAL_QUESTIONS_COUNT, payload: totalQuestionsCount })

export const getQuestions = (currentPage, pageSize, sort) => async (dispatch) => {
    try {
        dispatch(questionsIsFetching(true));
        const data = await questionAPI.getQuestions(currentPage, pageSize, sort)
        dispatch(questionsIsFetching(false));
        dispatch(setQuestions(data.items));
        dispatch(setTotalQuestionsCount(data.quota_max));
    } catch(error) {
        console.log(error)
    }
}
export const setAnswers = (answers) => ({ type: SET_ANSWERS, payload: answers })

export const answersIsFetching = (isFetching) => ({ type: ANSWERS_IS_FETCHING, payload: isFetching })

export const getAnswers = (questionId) => async (dispatch) => {
    try {
        dispatch(answersIsFetching(true));
        const data = await answersAPI.getAnswers(questionId)
        dispatch(answersIsFetching(false));
        dispatch(setAnswers(data.items));
    } catch(error) {
        console.log(error)
    }
} 
export const setSortRules = (sort) => ({ type: SET_SORT_RULES, payload: sort })