import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import Main from "./features/main/Main";
import {BrowserRouter} from "react-router-dom";
import AuthorizationProvider from "./context/authorizationContext";

const theme = createTheme({
    palette: {
        secondary: {
            light: '#7fb434',
            main: '#5FA202',
            dark: '#427101',
        },
        primary: {
            light: '#4b727a',
            main: '#1F4F59',
            dark: '#15373e',
        },
    },
    spacing: 8,
    typography: {
        fontFamily: [
            "Nunito Sans", 'sans-serif'
        ].join(',')
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthorizationProvider>
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            </AuthorizationProvider>
        </ThemeProvider>
    );
}

export default App;