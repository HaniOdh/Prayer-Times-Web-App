import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";


export default function DarkModeSwitch(){

    const { isDark, toggle } = useDarkMode();

    console.log(isDark);
    return(
        <button
            onClick={toggle}
            className="p-3 border border-border rounded-full hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-black-900"
        >
            {isDark ? <Sun className="w-4 h-4 text-muted-foreground" /> : <Moon className="w-4 h-4 text-muted-foreground" />}
        </button>
    );
}