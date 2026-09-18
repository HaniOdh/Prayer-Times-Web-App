import Spinner from "./Spinner";


export default function LoadingCard(){
    return(
        <div className="flex flex-col bg-white gap-4 justify-center items-center border border-gray-300 rounded-md py-4 px-6">
            <Spinner />
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-gray-800">Loading Prayers Data</p>
                <p className="text-sm text-gray-400">Please wait</p>
            </div>
        </div>
    );
}