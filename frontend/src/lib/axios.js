import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.end.MODE === "development" ? " http://localhost:5001/api" : "/api", // backend ka url hoga
    withCredentials: true,
});
