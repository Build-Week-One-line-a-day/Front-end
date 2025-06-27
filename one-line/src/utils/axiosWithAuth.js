import axios from 'axios'

export const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'https://back-end-c9ai.onrender.com/api',
        headers: { 'Content-Type': 'application/json', 'Authorization': token }
    })
} 
