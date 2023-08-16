import { apiClient } from "./ApiClient"

export const callTodoURL = (username) => apiClient.get(`/users/${username}/todos`)

export const callDeleteURL = (username,id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const callUpdateAPI = (username,id) => apiClient.get(`/users/${username}/todos/${id}`)

export const callPutMethod = (username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)

export const callPostMethod = (username,todo) => apiClient.post(`/users/${username}/todos`, todo)
 