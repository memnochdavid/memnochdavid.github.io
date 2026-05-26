/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from 'react';
import es from './es.json';
import en from './en.json';
import ca from './ca.json';

const translations = { es, en, ca };
const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'es');

  const changeLocale = useCallback((loc) => {
    setLocale(loc);
    localStorage.setItem('locale', loc);
  }, []);

  const t = useCallback((key) => {
    if (!key) return '';
    const val = key.split('.').reduce((obj, k) => obj?.[k], translations[locale]);
    return val ?? key;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
