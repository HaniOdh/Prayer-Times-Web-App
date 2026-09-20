import { useState } from "react";
import dayjs from "dayjs";
import NextPrayerCard from "./NextPrayerCard";
import TodayPrayerCard from "./TodayPrayerCard";
import MonthlyTimetable from "./MonthlyTimetable";
import { usePrayerTimes } from "../hooks/usePrayerTimes";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";
import { useTranslation } from "react-i18next";

export default function PrayerDashboard({ selectedLocation }) {
    const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [selectedMonth, setSelectedMonth] = useState(dayjs());

    const { t } = useTranslation();

    const { times: currentMonthTimes } = usePrayerTimes({
        year: dayjs().year(),
        month: dayjs().month() + 1,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude
    });

    const { times: selectedMonthTimes, isLoading, error } = usePrayerTimes({
        year: selectedMonth.year(),
        month: selectedMonth.month() + 1,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude
    });


    const formattedDate = dayjs().format('DD-MM-YYYY');
    const currentDayData = currentMonthTimes?.find(
        (data) => data.date.gregorian.date === formattedDate
    );
    
    const todayPrayerCardData = currentDayData ? {
        hijriDate: currentDayData.date.hijri.day.padStart(2, '0') + ' ' + t(currentDayData.date.hijri.month.en) + ' ' + currentDayData.date.hijri.year,
        date: t(currentDayData.date.gregorian.weekday.en) + ', ' + currentDayData.date.gregorian.date,
        prayers: currentDayData.timings,
    } : null;


    const formattedSelectedDate = dayjs(selectedDate).format('DD-MM-YYYY');
    const selectedDayData = selectedMonthTimes?.find(
        (data) => data.date.gregorian.date === formattedSelectedDate
    );

    const monthlyTimetableData = selectedDayData ? {
        hijriDate: selectedDayData.date.hijri.day?.padStart(2, '0') + ' ' + t(selectedDayData.date.hijri.month.en) + ' ' + selectedDayData.date.hijri.year,
        timings: selectedDayData.timings,
    } : null;

    if(isLoading) return(
        <LoadingCard />
    );

    if(error) return(
        <ErrorCard />
    );

    return (
        <div className='grid grid-cols-1 md:grid-cols-12 items-start gap-6 mb-6'>
            <div className='flex flex-col gap-6 col-span-6'>
                <NextPrayerCard
                    currentMonthTimes={currentMonthTimes}
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