import { questionAPI } from "../../api/api"

export const SET_QUESTIONS = "SET_QUESTIONS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const DATA_IS_FETCHING = "DATA_IS_FETCHING"
export const SET_TOTAL_QUESTIONS_COUNT = "SET_TOTAL_QUESTIONS_COUNT"


export const setQuestionsAC = (questions) => ({ type: SET_QUESTIONS, payload: questions })

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage })

export const dataIsFetchingAC = (isFetching) => ({ type: DATA_IS_FETCHING, payload: isFetching })

export const setTotalQuestionsCountAC = (totalQuestionsCount) => ({ type: SET_TOTAL_QUESTIONS_COUNT, payload: totalQuestionsCount })

export const getQuestionsTC = (currentPage, pageSize, sort) => {
    return async (dispatch) => {
        dispatch(dataIsFetchingAC(true));
        const data = await questionAPI.getQuestions(currentPage, pageSize, sort)

        dispatch(dataIsFetchingAC(false));
        dispatch(setQuestionsAC(data.items));
        dispatch(setTotalQuestionsCountAC(data.quota_max));
        
    }
}