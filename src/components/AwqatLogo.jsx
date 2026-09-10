import { LucideMoonStar } from "lucide-react";


export default function AwqatLogo(){
    return(
        <div className="flex gap-3 items-center">
            <div className="p-3 bg-primary-500 rounded-xl">
                <LucideMoonStar className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col">
                <h2 className="font-heading text-xl">Awqat</h2>
                <p className="text-gray-600 text-xs">PRAYER TIMES</p>
            </div>
        </div>
    );
}