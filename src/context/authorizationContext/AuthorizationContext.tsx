import React, {createContext, useState, FC, useEffect} from "react";
import {contextDefaultValues, AuthorizationContextState} from "./types";
import IntegrationRepository from "../../features/integration/repository/IntegrationRepository";
import {useInterval} from "../../features/util/UseInterval";

export const AuthorizationContext = createContext<AuthorizationContextState>(
    contextDefaultValues
);

const AuthorizationProvider: FC = ({ children }) => {
    const [token, setToken] = useState<string>('');

    useEffect(() => {
        getAuthToken()
    }, []);

    useInterval(() => {
        getAuthToken()
    }, 10000);

    const getAuthToken = () => {
        IntegrationRepository.getAuthToken()
            .then(response => {
                setToken(response.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }

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
