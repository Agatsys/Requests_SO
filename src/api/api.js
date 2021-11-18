import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.stackexchange.com/2.3/'
})

export const questionAPI = {
    getQuestions(currentPage = 1, pageSize = 5, sort = "activity") {
        return instance.get(`questions?page=${currentPage}&pagesize=${pageSize}&order=desc&sort=${sort}&site=stackoverflow`)
            .then(response => {
                return response.data
            })
    },
}

export const answersAPI = {
    getAnswers(questionId) {
        return instance.get(`questions/${questionId}/answers?page=1&pagesize=20&order=desc&sort=activity&site=stackoverflow&filter=withbody`)
            .then(response => {
                return response.data
            })
    }
}