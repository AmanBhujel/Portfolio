import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkModeOpen, setIsDarkModeOpen] = useState(false);

  // Load dark mode state from cookie on component mount
  useEffect(() => {
    const darkModeCookie = getCookie('darkMode');
    if (darkModeCookie) {
      setIsDarkModeOpen(darkModeCookie === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkModeOpen;
    setIsDarkModeOpen(newDarkModeState);

    // Set dark mode state as a cookie
    setCookie('darkMode', newDarkModeState);
  };

  const value = {
    isDarkModeOpen,
    toggleDarkMode,
  };

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Helper function to get a cookie value
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

// Helper function to set a cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}
