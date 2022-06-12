import axiosInstance from "../axios";

const loginUser = async (username: string, password: string) => {
    return await axiosInstance.post("/auth/login", { username, password });
};

export const AuthService = {
    loginUser,
};
