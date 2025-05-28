import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'si' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-md border border-stone-200 rounded-full px-4 py-2 text-sm font-medium text-stone-800 hover:bg-white hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {i18n.language === 'en' ? 'SI' : 'EN'}
    </motion.button>
  );
};

export default LanguageToggle;