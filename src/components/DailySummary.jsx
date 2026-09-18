import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import CalendarPrayerPill from "./CalendarPrayerPill";

dayjs.extend(customParseFormat);


const PRAYER_KEYS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

const formatPrayerTime = (rawTimeStr) => {
    if(!rawTimeStr) return "";

    const cleanTime = rawTimeStr.split(" ")[0];
    return dayjs(cleanTime, "HH:mm").format("hh:mm A");
}

export default function DailySummary({selectedDate, dayData}){
    if(!dayData) return null;

    const prayerList = PRAYER_KEYS.map((name) => ({
            name,
            time: formatPrayerTime(dayData?.timings?.[name]),
        }))

    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-800 dark:text-gray-300 text-xs font-semibold">{formattedDate}</span>
                <span className="text-muted-foreground text-xs">{dayData.hijriDate}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {prayerList.map(({name, time}) => (
                    <CalendarPrayerPill
                        key={name}
                        prayer={name}
                        time={time}
                    />
                ))}
            </div>
        </div>
    );
}