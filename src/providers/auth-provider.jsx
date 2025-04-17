import React, { useState } from 'react'
import { AuthContext } from '../context/auth-context'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

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