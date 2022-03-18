import React, { createContext, useState, FC } from "react";
import {contextDefaultValues, AuthorizationContextState} from "./types";

export const AuthorizationContext = createContext<AuthorizationContextState>(
    contextDefaultValues
);

const AuthorizationProvider: FC = ({ children }) => {
    const [token, setToken] = useState<string>('');

    return (
        <AuthorizationContext.Provider
            value={{
                token,
                setToken
            }}
        >
            {children}
        </AuthorizationContext.Provider>
    );
};

export default AuthorizationProvider;
