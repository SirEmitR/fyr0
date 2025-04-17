import { createContext, use } from "react"

export const AuthContext = createContext({
    user: null,
    loggin: () => {},
    logout: () => {}
});

export const useAuth = () => use(AuthContext);
