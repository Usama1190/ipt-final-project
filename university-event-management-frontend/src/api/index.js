import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URI,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;