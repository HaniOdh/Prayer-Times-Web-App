import NextPrayerCard from "./NextPrayerCard";
import TodayPrayerCard from "./TodayPrayerCard";
import MonthlyTimetable from "./MonthlyTimetable";


export default function PrayerDashboard(){
    return(
        <div className='grid grid-cols-12 items-start gap-6'>
            <div className='flex flex-col gap-6 col-span-6'>
            <NextPrayerCard
                nextPrayer={"Isha"}
                duration={1.5 * 60 * 60 * 1000}
                time={"07:41 PM"}
            />

            <TodayPrayerCard
                location={"Mecca"}
                hijriDate={"17 Rabīʿ al-awwal 1448"}
                date={"Sunday, 30/08/2026"} 
                prayers={""}
            />
            </div>
            <div className='col-span-6'>
            <MonthlyTimetable />
            </div>
        </div>
    );
}