import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/manrope";

export const theme = extendTheme({
    fonts: {
        body: `'Open Sans', sans-serif`,
        heading: `'Manrope, sans-serif`,
    },
});


export interface ThemeProp {
    light: {
        textColor: string,
        bg: string,
    },
    dark: {
        textColor: string,
        bg: string,
    },
}

export const themeContext: ThemeProp = {
    light: {
        textColor: '#0A2640',
        bg: '#FFFFFF',
    },
    dark: {
        textColor: '#0A2640',
        bg: '#FFFFFF',
    },
}