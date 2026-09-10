import { useState } from "react";
import { Moon, Sun } from "lucide-react";


export default function DarkModeSwitch(){

    const [isDarkMode, setIsDarkMode] = useState(false);

    return(
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 border border-gray-300 rounded-full hover:cursor-pointer hover:bg-gray-200"
        >
            {isDarkMode ? <Sun className="w-4 h-4 text-gray-800" /> : <Moon className="w-4 h-4 text-gray-800" />}
        </button>
    );
}