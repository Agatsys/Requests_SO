import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.stackexchange.co/2.3/'
})

export const questionAPI = {
    getQuestions(currentPage = 1, pageSize = 5, sort = "activity") {
        debugger
        return instance.get(`questions?page=${currentPage}&pagesize=${pageSize}&order=desc&sort=${sort}&site=stackoverflow`)
            .then(response => {
                return response.data
            })
    },
}

export const answersAPI = {
    getAnswers() {
        return instance.get(``)
            .then(response => {
                return response.data
            })
    }
}