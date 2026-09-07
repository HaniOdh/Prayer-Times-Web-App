import dayjs from "dayjs";
import CalendarPrayerPill from "./CalendarPrayerPill";


export default function DailySummary({selectedDate, dayData}){
    if(!dayData) return null;

    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-800 text-xs font-semibold">{formattedDate}</span>
                <span className="text-gray-600 text-xs">{dayData.hijri}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {Object.entries(dayData.timings).map(([prayer, time]) => (
                    <CalendarPrayerPill
                        key={prayer}
                        prayer={prayer}
                        time={time}
                    />
                ))}
            </div>
        </div>
    );
}