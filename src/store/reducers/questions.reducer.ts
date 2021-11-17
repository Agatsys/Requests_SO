import { 
    DATA_IS_FETCHING,
    SET_QUESTIONS
} from '../actions/actions'

export type QuestionsReducerState = {
    items: Array<QuestionItem>;
    isFetching: boolean;
    [key: string]: any
}
export type QuestionItem = {
    tags: Array<string>;
    owner: {
        account_id: number;
        reputation: number,
        user_id: number,
        user_type: string,
        profile_image: string,
        display_name: string,
        link: string
    },
    is_answered: boolean;
    view_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date: number;
    question_id: number;
    content_license: string;
    link: string
    title: string
}

let initialState: QuestionsReducerState = {
    items: [],
    isFetching: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return { ...state, items: action.payload }
        case DATA_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        default:
            return state; 
    }
}

export default rootReducer;