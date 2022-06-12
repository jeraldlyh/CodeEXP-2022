import { createContext, useContext, useState } from "react";
import { TUser } from "../common/types";
import { AuthService } from "../services/auth";

type TProviderProps = {
    children?: React.ReactNode;
};

type TContext = {
    isLoggedIn: boolean;
    isLoading: boolean;
    signIn: (username: string, password: string) => Promise<void>;
};
const initialContext = {
    isLoggedIn: false,
    isLoading: false,
    signIn: async () => undefined,
};

export const AuthContext = createContext<TContext>(initialContext);

export const AuthProvider: React.FC<TProviderProps> = ({ children }) => {
    const auth = useCustomAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

const useCustomAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signIn = async (username: string, password: string) => {
        await AuthService.loginUser(username, password);
        setIsLoggedIn(true);
    };

    return {
        isLoggedIn,
        isLoading,
        signIn,
    };
};
