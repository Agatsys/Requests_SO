import { ANSWERS_IS_FETCHING, SET_ANSWERS } from '../actions/actions'


export type AnswersReducerState = {
    items: Array<AnswerItem>;
    answersIsFetching: boolean;
}
export type AnswerItem = {
    owner: {
        account_id: number,
        reputation: number,
        user_id: number,
        user_type: string,
        profile_image: string,
        display_name: string,
        link: string
    },
    is_accepted: boolean,
    score: number,
    last_activity_date: number,
    creation_date: number,
    answer_id: number,
    question_id: number,
    content_license: string
}

let initialState: AnswersReducerState = {
    items: [],
    answersIsFetching: false,
}

const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANSWERS:
            return { ...state, items: action.payload }
        case ANSWERS_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        default:
            return state; 
    }
}

export default answersReducer;