import { useState } from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export default function LanguageSwitchButton(){

    const { i18n } = useTranslation();

    const isArabic = i18n.language === 'ar';

    const toggleLanguage = () => {
        const newLang = isArabic ? 'en' : 'ar';

        i18n.changeLanguage(newLang);

        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    }

    return(
        <button
            onClick={toggleLanguage}
            className='inline-flex items-center justify-center gap-2 py-2 px-4 border border-border rounded-full font-medium 
            hover:bg-gray-200 dark:hover:bg-black-900 hover:cursor-pointer'
        >
            <Languages className='w-4 h-4 shrink-0 text-muted-foreground' />

            <span> {isArabic ? "English" : "العربية"} </span>
        </button>
    );
}