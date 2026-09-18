import { CircleAlert } from "lucide-react";


export default function ErrorCard(){
    return(
        <div className="flex flex-col bg-white gap-4 justify-center items-center border border-gray-300 rounded-md py-4 px-6">
            <CircleAlert className="w-8 h-8 text-red-600" />
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-gray-800">Error Fetching Data</p>
                <p className="text-sm text-gray-400">Please Try Again</p>
            </div>
        </div>
    );
}