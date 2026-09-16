import { useState } from "react";
import dayjs from "dayjs";
import NextPrayerCard from "./NextPrayerCard";
import TodayPrayerCard from "./TodayPrayerCard";
import MonthlyTimetable from "./MonthlyTimetable";
import { usePrayerTimes } from "../hooks/usePrayerTimes";

export default function PrayerDashboard({ selectedLocation }) {
    const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [selectedMonth, setSelectedMonth] = useState(dayjs());

    // 1. Fetch data locked to the current real-world month for TodayPrayerCard
    const { times: currentMonthTimes } = usePrayerTimes({
        year: dayjs().year(),
        month: dayjs().month() + 1,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude
    });

    // 2. Fetch data based on user selection for MonthlyTimetable
    const { times: selectedMonthTimes, isLoading, error } = usePrayerTimes({
        year: selectedMonth.year(),
        month: selectedMonth.month() + 1,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude
    });

    console.log(selectedMonthTimes);
    console.log(error);

    // Process Today's Data
    const formattedDate = dayjs().format('DD-MM-YYYY');
    const currentDayData = currentMonthTimes?.find(
        (data) => data.date.gregorian.date === formattedDate
    );
    
    const todayPrayerCardData = currentDayData ? {
        hijriDate: currentDayData.date.hijri.day.padStart(2, '0') + ' ' + currentDayData.date.hijri.month.en + ' ' + currentDayData.date.hijri.year,
        date: currentDayData.date.gregorian.weekday.en + ', ' + currentDayData.date.gregorian.date,
        prayers: currentDayData.timings,
    } : null;


    const formattedSelectedDate = dayjs(selectedDate).format('DD-MM-YYYY');
    const selectedDayData = selectedMonthTimes?.find(
        (data) => data.date.gregorian.date === formattedSelectedDate
    );

    const monthlyTimetableData = selectedDayData ? {
        hijriDate: selectedDayData.date.hijri.day?.padStart(2, '0') + ' ' + selectedDayData.date.hijri.month.en + ' ' + selectedDayData.date.hijri.year,
        timings: selectedDayData.timings,
    } : null;

    return (
        <div className='grid grid-cols-12 items-start gap-6'>
            <div className='flex flex-col gap-6 col-span-6'>
                <NextPrayerCard
                    nextPrayer={"Isha"}
                    duration={1.5 * 60 * 60 * 1000}
                    time={"07:41 PM"}
                />

                <TodayPrayerCard
                    location={selectedLocation.name}
                    hijriDate={todayPrayerCardData?.hijriDate}
                    date={todayPrayerCardData?.date}
                    prayers={todayPrayerCardData?.prayers}
                />

            </div>
            <div className='col-span-6'>
                <MonthlyTimetable
                    currentMonth={selectedMonth}
                    onMonthChange={setSelectedMonth}
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    selectedDayData={monthlyTimetableData}
                />
            </div>
        </div>
    );
}