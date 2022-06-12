import { createContext, useContext, useState } from "react";
import { TUser } from "../common/types";
import { AuthService } from "../services/auth";

type TProviderProps = {
    children?: React.ReactNode;
};

type TContext = {
    user: TUser | null;
    isLoading: boolean;
    signIn: (username: string, password: string) => Promise<void>;
};
const initialContext = {
    user: null,
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
    const [user, setUser] = useState<TUser | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signIn = async (username: string, password: string) => {
        const token = await AuthService.loginUser(username, password);
    };

    return {
        user,
        isLoading,
        signIn,
    };
};
