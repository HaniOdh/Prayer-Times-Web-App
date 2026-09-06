


export default function CalendarPrayerPill({prayer, time}){
    return(
        <div className="flex flex-1 flex-col gap-1 p-2 bg-primary-50 text-center rounded-md">
            <p className="text-sm text-gray-500">{prayer}</p>
            <p className="font-semibold text-sm">{time}</p>
        </div>
    );
}