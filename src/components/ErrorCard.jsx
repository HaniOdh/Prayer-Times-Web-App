import { CircleAlert } from "lucide-react";


export default function ErrorCard(){
    return(
        <div className="flex flex-col bg-card gap-4 justify-center items-center border border-border bg-card rounded-md py-4 px-6">
            <CircleAlert className="w-8 h-8 text-red-600" />
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-gray-800 dark:text-primary-50">Error Fetching Data</p>
                <p className="text-sm text-muted-foreground">Please Try Again</p>
            </div>
        </div>
    );
}