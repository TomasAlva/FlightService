import { createContext } from "react";

export const themes = {
    light: {
        backgroundColor: 'white',
        color: '#201D1C'
    },
    dark: {
        backgroundColor: 'black',
        color: '#E6E3E3'
    }
};

const ThemeContext = createContext(themes.dark);
export default ThemeContext;