/**
 * Utility functions for managing language preferences in localStorage
 */

const LANGUAGE_KEY = 'i18nextLng';

/**
 * Get the current language from localStorage
 * @returns {string} The current language code ('en' or 'ar')
 */
export const getStoredLanguage = () => {
  const storedLang = localStorage.getItem(LANGUAGE_KEY);
  return storedLang && ['en', 'ar'].includes(storedLang) ? storedLang : 'en';
};

/**
 * Save the language preference to localStorage
 * @param {string} language - The language code to store ('en' or 'ar')
 */
export const setStoredLanguage = (language) => {
  if (language && ['en', 'ar'].includes(language)) {
    localStorage.setItem(LANGUAGE_KEY, language);
  }
};

/**
 * Toggle between English and Arabic languages
 * @param {string} currentLang - The current language code
 * @returns {string} The new language code after toggling
 */
export const toggleStoredLanguage = (currentLang) => {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setStoredLanguage(newLang);
  return newLang;
};