 import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    Notification: false,

}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('light');
    const [ThemeSettings, setThemeSettings] = useState(false);
    
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        
        localStorage.setItem('themeMode ', e.target.value);
    }

    const setColor = (e) => {
        setCurrentColor(e.target.value);
        
        localStorage.setItem('colorMode ', e.target.value);
    }
    
    const handleClick = (cliked) =>  {
        setIsClicked({...initialState, [cliked]: true}); 
    }

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode, setCurrentColor, setCurrentMode, ThemeSettings, setThemeSettings  }}>
            {children}
        </StateContext.Provider>

    )
} 

export const useStateContext = () => useContext(StateContext);