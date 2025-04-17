import React, { use, useState } from 'react'
import { AuthContext } from '../context/auth-context'
import { fetchUserAuthStatus } from '../data/auth';

const AuthProvider = ({children}) => {
    const auth = use(fetchUserAuthStatus());
    const initialUser = !auth.error ? { ...auth.data, ID: auth.data.id } : null;
    const [user, setUser] = useState(initialUser);

    const loggin = (res) => {
        setUser(res)
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{
            user,
            loggin,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider