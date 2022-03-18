export type AuthorizationContextState = {
    token: string;
    setToken: (token: string) => void;
};

export const contextDefaultValues: AuthorizationContextState = {
    token: '',
    setToken: () => {}
};