import Spinner from "./Spinner";


export default function LoadingCard(){
    return(
        <div className="flex flex-col bg-card gap-4 justify-center items-center border border-border bg-card rounded-md py-4 px-6">
            <Spinner />
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-gray-800 dark:text-primary-50">Loading Prayers Data</p>
                <p className="text-sm text-muted-foreground">Please wait</p>
            </div>
        </div>
    );
}