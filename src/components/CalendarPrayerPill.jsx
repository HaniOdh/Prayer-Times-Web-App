


export default function CalendarPrayerPill({prayer, time}){
    return(
        <div className="flex flex-1 flex-col gap-1 p-2 bg-primary-50 dark:bg-primary-500/29 text-center rounded-xl">
            <p className="text-sm text-muted-foreground">{prayer}</p>
            <p className="font-semibold text-sm text-black dark:text-primary-50">{time}</p>
        </div>
    );
}