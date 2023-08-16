import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider ({children}) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    return (
        <LoginContext.Provider
        value={{
            user,
            setUser,
            initializing,
            setInitializing
        }}
        >
            {children}
        </LoginContext.Provider>
    )
}