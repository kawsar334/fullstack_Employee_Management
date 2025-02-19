
import React, { createContext, useContext, useState } from "react";


 export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false); 

    const toggleTheme = () => {
        // setIsDarkMode((prevMode) => !prevMode);
        // document.documentElement.setAttribute("data-theme", !isDarkMode ? "dark" : "light");
        setIsDarkMode(!isDarkMode);
        // document.documentElement.setAttribute("data-theme", "dark");
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider
