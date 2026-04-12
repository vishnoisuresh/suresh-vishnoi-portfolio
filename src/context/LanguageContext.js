import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('de');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'de' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'de' ? 'en' : 'de';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
