import axios from "axios";

const IS_PRODUCTION = false;
const baseURL = IS_PRODUCTION
    ? "https://codeexp-2022.herokuapp.com/"
    : "http://192.168.1.3:8000/api";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
    },
    withCredentials: true,
});

// JWT tokens are being set as HTTP-only cookies

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("accessToken");

//         if (config.headers && token) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );
export default axiosInstance;
