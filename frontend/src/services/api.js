import axios from axios;

const api = axios.create({
    baseURL: 'https://localhost:8000/api',
    withCredentials: true,
});

export default api;