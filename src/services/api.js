import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BACKEND ?? 'https://api.jikan.moe/v4/schedules/tuesday?sfw'
})