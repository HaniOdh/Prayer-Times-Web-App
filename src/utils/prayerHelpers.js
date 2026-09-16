import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const PRAYER_KEYS = ["Fajr", "Dhuhr", "Asr" , "Maghrib", "Isha"];

export function getNextPrayer(monthTimes){
    if(!monthTimes || monthTimes.length === 0) return null;

    const now = dayjs();
    const todayFormatted = now.format("DD-MM-YYYY");
    const todayStr = now.format("YYYY-MM-DD");

    const todayData = monthTimes.find(
        (item) => item.date.gregorian.date === todayFormatted
    );

    if(!todayData.timings) return null;

    for(const key of PRAYER_KEYS){
        const rawTime = todayData.timings[key]?.split(" ")[0];
        const prayerDateTime = dayjs(`${todayStr} ${rawTime}`, "YYYY-MM-DD HH:mm");
        const remainingMs = prayerDateTime.diff(now);

        if(prayerDateTime.isAfter(now)){
            return{
                nextPrayer: key,
                targetTime: prayerDateTime.toDate(),
                formattedTime: prayerDateTime.format("hh:mm A"),
                remainingTime: Math.max(0, remainingMs),
            };
        }
    }

    const tomorrow = now.add(1, "day");
    const tomorrowFormatted = tomorrow.format("DD-MM-YYYY");
    const tomorrowStr = tomorrow.format("YYYY-MM-DD");

    const tomorrowData = monthTimes.find(
        (item) => item.date.gregorian.date === tomorrowFormatted
    );

    const tomorrowFajrRaw = (
        tomorrowData?.timings?.Fajr || todayData.timings.Fajr
    ).split(" ")[0];

    const nextFajrDateTime = dayjs(`${tomorrowStr} ${tomorrowFajrRaw}`, "YYYY-MM-DD HH:mm");
    const remainingMs = nextFajrDateTime.diff(now);

    return{
        nextPrayer: "Fajr",
        targetTime: nextFajrDateTime.toDate(),
        formattedTime: nextFajrDateTime.format("hh:mm A"),
        remainingTime: Math.max(0, remainingMs),
    };
}