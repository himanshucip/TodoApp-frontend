import { apiClient } from "./ApiClient";


export function retrieveData(){
    return apiClient.get('/hello-world');
}

export const getData = () => apiClient.get(`/hello-world`);

export const retrieveHelloWorldPathVariable 
    = (username, token) => apiClient.get(`hello-world/path-variable/${username}`, {
        headers: {
            Authorization: token
        }
    })


