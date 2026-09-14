import { useState } from "react";
import dayjs from "dayjs";
import NextPrayerCard from "./NextPrayerCard";
import TodayPrayerCard from "./TodayPrayerCard";
import MonthlyTimetable from "./MonthlyTimetable";
import { usePrayerTimes } from "../hooks/usePrayerTimes";


export default function PrayerDashboard({selectedLocation}){

    const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [selectedMonth, setSelectedMonth] = useState(dayjs());

    const apiMonth = selectedMonth.month() + 1;
    const apiYear = selectedMonth.year();

    const { times, isLoading, error } = usePrayerTimes({
        year: apiYear, 
        month: apiMonth, 
        latitude: selectedLocation.latitude, 
        longitude: selectedLocation.longitude
    });

    console.log(times);
    console.log(error);

    const formattedDate = dayjs().format('DD-MM-YYYY');

    const currentDayData = times?.find(
        (data) => data.date.gregorian.date === formattedDate
    );
    const todayPrayerCardData = {
        hijriDate:"",
        date: currentDayData?.date?.gregorian?.weekday.en + ', ' + currentDayData?.date?.gregorian?.date,
        prayers: currentDayData.timings,
    }

    console.log(currentDayData);

    return(
        <div className='grid grid-cols-12 items-start gap-6'>
            <div className='flex flex-col gap-6 col-span-6'>
            <NextPrayerCard
                nextPrayer={"Isha"}
                duration={1.5 * 60 * 60 * 1000}
                time={"07:41 PM"}
            />

            <TodayPrayerCard
                location={selectedLocation.name}
                hijriDate={"17 Rabīʿ al-awwal 1448"}
                date={todayPrayerCardData.date} 
                prayers={todayPrayerCardData.prayers}
            />
            </div>
            <div className='col-span-6'>
                <MonthlyTimetable 
                    currentMonth={selectedMonth}
                    onMonthChange={setSelectedMonth}
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                />
            </div>
        </div>
    );
}