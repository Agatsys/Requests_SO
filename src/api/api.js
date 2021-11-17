import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.stackexchange.com/2.3/'
})

export const questionAPI = {
    getQuestions(currentPage = 1, pageSize = 5, sort = activity) {
        return instance.get(`answers?page=${currentPage}&pagesize=${pageSize}&order=desc&sort=${sort}&site=stackoverflow`)
            .then(response => {
                return response.data
            })
    },
}