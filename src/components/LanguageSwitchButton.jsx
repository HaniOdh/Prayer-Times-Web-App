import { useState } from 'react';
import { Languages } from 'lucide-react';


export default function LanguageSwitchButton(){

    const [isArabic, setIsArabic] = useState(false);

    return(
        <button
            onClick={() => setIsArabic(!isArabic)}
            className='inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-full font-medium hover:bg-gray-200 hover:cursor-pointer'
        >
            <Languages className='w-4 h-4 shrink-0 text-gray-600' />

            <span> {isArabic ? "English" : "العربية"} </span>
        </button>
    );
}