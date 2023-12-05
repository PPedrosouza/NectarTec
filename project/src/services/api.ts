import axios from 'axios'
import { getUserLocalStorage } from '../contexts/AuthProvider/util'

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

// export const createSession = async (email: any, password: any) => {
//     return api.post("/sessions", {email, password});
// }

api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage()

        config.headers.Authorization = user?.token

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)