import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = '/choreo-apis/finalproject/backend/v1/'


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        // Check if the URL is for authentication (register/login)
        if ((config.url.endsWith("/api/user/register/") || config.url.endsWith("/api/token/"))) {
            return config;
        }

        // Skip token for the contact form
        if (config.url.endsWith("/api/contact/")) {
            return config; // No token needed for contact
        }

        // If there's a token and it's not for contact, add the token to headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;