import React from "react";
import PrayerTimeRow from "./PrayerTimeRow";
import Separator from "./Separator";


export default function TodayPrayerCard({location, hijriDate, date, prayers}){

    const defaultPrayers = prayers || [
        {name: "Fajr", time: "5:01 AM", status: null},
        {name: "Sunrise", time: "6:04 AM", status: null},
        {name: "Dhuhr", time: "12:21 PM", status: null},
        {name: "Asr", time: "3:47 PM", status: null},
        {name: "Maghrib", time: "6:39 PM", status: "now"},
        {name: "Isha", time: "7:41 PM", status: "next"},
    ]

    return(
        <div className="flex flex-col border border-gray-300 rounded-xl p-7 lg:col-span-5">
            <div>
                <h2 className="font-heading text-2xl">Today's times</h2>
                <span className="text-gray-500 text-sm flex justify-between">
                    <span>{location} &middot; {hijriDate}</span>
                    <span>{date}</span>
                </span>
            </div>
            <div className="mt-5">
                {defaultPrayers.map((prayer, index)=>(
                    <React.Fragment key={prayer.name}>
                        <PrayerTimeRow
                            icon={prayer.icon}
                            name={prayer.name}
                            status={prayer.status}
                            time={prayer.time}
                        />
                        {index !== defaultPrayers.length-1 && <Separator />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}