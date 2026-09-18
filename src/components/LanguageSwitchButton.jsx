import { useState } from 'react';
import { Languages } from 'lucide-react';


export default function LanguageSwitchButton(){

    const [isArabic, setIsArabic] = useState(false);

    return(
        <button
            onClick={() => setIsArabic(!isArabic)}
            className='inline-flex items-center justify-center gap-2 py-2 px-4 border border-border rounded-full font-medium 
            hover:bg-gray-200 dark:hover:bg-black-900 hover:cursor-pointer'
        >
            <Languages className='w-4 h-4 shrink-0 text-muted-foreground' />

            <span> {isArabic ? "English" : "العربية"} </span>
        </button>
    );
}