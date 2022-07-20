import React, { createContext, useState, FC } from "react";
import {contextDefaultValues, IntegrationContextState} from "./types";
import {IIntegrationConfiguration} from "../../features/integration/types/IntegrationConfiguration";

export const IntegrationContext = createContext<IntegrationContextState>(
    contextDefaultValues
);

const IntegrationProvider: FC = ({ children }) => {
    const [integration, setIntegration] = useState<IIntegrationConfiguration>({});
    const [_case, setCase] = useState<string | undefined>(undefined);
    const [destination, setDestination] = useState<string>('');
    const [sourceApplication, setSourceApplication] = useState<string>('');

    const resetSourceAndDestination = () => {
        setDestination('');
        setSourceApplication('');
    }

    const resetCase = () => {
        setCase(undefined);
    }

    return (
        <IntegrationContext.Provider
            value={{
                integration,
                setIntegration,
                destination,
                setDestination,
                sourceApplication,
                setSourceApplication,
                _case,
                setCase,
                resetCase,
                resetSourceAndDestination
            }}
        >
            {children}
        </IntegrationContext.Provider>
    );
};

export default IntegrationProvider;
