import axios from 'axios'

export const apiClient = axios.create(
    {
       // baseURL: 'https://todo-craft-himanshu-kashyap.up.railway.app'
        baseURL: 'http://localhost:8080'
    }
)