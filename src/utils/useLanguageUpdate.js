import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getStoredLanguage, setStoredLanguage } from './languageStorage';

// Custom hook to force component updates when language changes
export const useLanguageUpdate = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(getStoredLanguage() || i18n.language || 'en');

  useEffect(() => {
    // Function to handle language changes
    const handleLanguageChange = () => {
      const currentLang = i18n.language || 'en';
      setLanguage(currentLang);
      setStoredLanguage(currentLang);
    };

    // Add event listener for language changes
    i18n.on('languageChanged', handleLanguageChange);

    // Clean up event listener
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return language;
};
