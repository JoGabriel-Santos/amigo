import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((request) => {
    if (localStorage.getItem('profile')) {
        request.headers.Authorization = JSON.parse(localStorage.getItem('profile'))['token'].credential ?
            `Bearer ${ JSON.parse(localStorage.getItem('profile'))['token'].credential }` :
            `Bearer ${ JSON.parse(localStorage.getItem('profile'))['token'] }`
    }

    return request;
})

export const fetchVisits = () => API.get(`/visits`)
export const createVisit = (newVisit) => API.post('/visits', newVisit);
export const updateVisit = (updatedVisit) => API.patch(`/visits/update`, updatedVisit);
export const deleteVisit = (deleteVisit) => API.patch(`/visits/refuse`, deleteVisit);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);