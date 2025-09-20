import React, { createContext, useContext, useState, useEffect, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const palette = {
    lightBlue: '#2786f3ff',
    blue: '#2764F3',
    darkBlue: '#163C90',
    darkGrey: '#2F3136',
    mediumGrey: '#8A8B8E',
    lightGrey: '#E5E5E5',
    black: '#1d1616',
    white: '#f9f8ff',
}

const defaultTheme = {
    name: 'default',
    navbarBg: palette.lightGrey,
    navbarLinkColor: palette.lightGrey,
    navbarActiveBg: palette.lightGrey,
    navbarActiveColor: palette.blue,
    navbarHoverBg: palette.darkBlue,
    navbarHoverColor: palette.lightBlue,
    pageBg: palette.blue,
    footerColor: palette.lightGrey,
    lineBorderColor: palette.lightGrey,
    bodyTextColor: palette.lightGrey,
};

const ThemeContext = createContext({
    theme: defaultTheme,
});

export const useTheme = () => useContext(ThemeContext);

const themes = {
    default: defaultTheme,
    secondaryTheme: {
        name: 'secondary',
        navbarBg: palette.blue,
        navbarLinkColor: palette.blue,
        navbarActiveBg: palette.blue,
        navbarActiveColor: palette.lightGrey,
        navbarHoverBg: palette.mediumGrey,
        navbarHoverColor: palette.lightGrey,
        pageBg: palette.lightGrey,
        footerColor: palette.blue,
        lineBorderColor: palette.blue,
        bodyTextColor: palette.blue,
    },
    notFound : {
        name: 'notFound',
        navbarBg: palette.darkGrey,
        navbarLinkColor: palette.darkGrey,
        navbarActiveBg: palette.darkGrey,
        navbarActiveColor: palette.mediumGrey,
        navbarHoverBg: palette.darkGrey,
        navbarHoverColor: palette.mediumGrey,
        pageBg: palette.mediumGrey,
        footerColor: palette.darkGrey,
        lineBorderColor: palette.darkGrey,
        bodyTextColor: palette.darkGrey,
    },
};

export const Theme = memo(function ThemeProvider ({ children }) {
    const location = useLocation();
    const [ currentTheme, setCurrentTheme ] = useState(defaultTheme);

    useEffect(() => {
        let newThemeName;
        
        switch (!newThemeName) {
            case location.pathname === '/about':
                newThemeName = 'secondaryTheme';
                break;
            case location.pathname === '/resume':
                newThemeName = 'default';
                break;
            case location.pathname === '/projects':
                newThemeName = 'secondaryTheme';
                break;
            case location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/resume' && location.pathname !== '/projects':
                newThemeName = 'notFound';
                break;
            default:
                newThemeName = 'default';
                break;
        };

        const selectedTheme = themes[newThemeName] || defaultTheme;
        setCurrentTheme(selectedTheme);

        const root = document.documentElement;
        Object.keys(selectedTheme).forEach(key => {

            const kebabCaseKey = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
            const cssVarName = `--theme-${kebabCaseKey}`;
            root.style.setProperty(cssVarName, selectedTheme[key]);
        });

    }, [location.pathname]);

    const contextValue = {
        theme: currentTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
});