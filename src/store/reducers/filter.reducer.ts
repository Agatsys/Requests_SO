import { SET_CURRENT_PAGE, SET_TOTAL_QUESTIONS_COUNT, SET_PAGE_SIZE, SET_SORT_RULES } from '../actions/actions'


export type FilterReducerState = {
    pageSize: number,
    currentPage: number,
    totalQuestionsCount: number,
    sort: string,
}

let initialState: FilterReducerState = {
    pageSize: 10,
    currentPage: 1,
    totalQuestionsCount: 0,
    sort: "activity",
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        case SET_TOTAL_QUESTIONS_COUNT:
            return { ...state, totalQuestionsCount: action.payload }
        case SET_PAGE_SIZE:
            return { ...state, pageSize: action.payload }
        case SET_SORT_RULES:
            return { ...state, sort: action.payload }
        default:
            return state; 
    }
}

export default rootReducer;