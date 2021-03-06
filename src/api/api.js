import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.stackexchange.com/2.3/'
})

export const questionAPI = {
    getQuestions(currentPage = 1, pageSize = 10, sort = "activity", tag = "") {
        return instance.get(`questions?page=${currentPage}&pagesize=${pageSize}&order=desc&sort=${sort}&tagged=${tag}&site=stackoverflow&filter=!6VvPDzQ)xanT4`)
            .then(response => {
                return response.data
            })
    },
}

// Filter includes:
// question > body
// .wrapper > total

export const answersAPI = {
    getAnswers(questionId) {
        return instance.get(`questions/${questionId}/answers?page=1&pagesize=20&order=desc&sort=activity&site=stackoverflow&filter=withbody`)
            .then(response => {
                return response.data
            })
    }
}