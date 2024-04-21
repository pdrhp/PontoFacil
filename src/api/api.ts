import axios from "xior";

export const api = axios.create({
    baseURL: process.env.API_URL
})

