import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PrayerTimeRow from "./PrayerTimeRow";
import Separator from "./Separator";

dayjs.extend(customParseFormat);


const PRAYER_KEYS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const formatPrayerTime = (rawTimeStr) => {
    if(!rawTimeStr) return "";

    const cleanTime = rawTimeStr.split(" ")[0];
    return dayjs(cleanTime, "HH:mm").format("hh:mm A");
}

export default function TodayPrayerCard({location, hijriDate, date, prayers}){

    const fallbackPrayers = [
        { name: "Fajr", time: "5:01 AM", status: null },
        { name: "Sunrise", time: "6:04 AM", status: null },
        { name: "Dhuhr", time: "12:21 PM", status: null },
        { name: "Asr", time: "3:47 PM", status: null },
        { name: "Maghrib", time: "6:39 PM", status: "now" },
        { name: "Isha", time: "7:41 PM", status: "next" },
    ];

    const prayerList = prayers
        ? PRAYER_KEYS.map((name) => ({
              name,
              time: formatPrayerTime(prayers[name]),
              status: null,
          }))
        : fallbackPrayers;

    return(
        <div className="flex flex-col border border-gray-300 rounded-xl p-7">
            <div>
                <h2 className="font-heading text-2xl">Today's times</h2>
                <span className="text-gray-500 text-sm flex flex-col md:flex-row md:justify-between mt-1">
                    <span>{location} &middot; {hijriDate}</span>
                    <span>{date}</span>
                </span>
            </div>
            <div className="mt-5">
                {prayerList.map((prayer, index)=>(
                    <React.Fragment key={prayer.name}>
                        <PrayerTimeRow
                            icon={prayer.icon}
                            name={prayer.name}
                            status={prayer.status}
                            time={prayer.time}
                        />
                        {index !== prayerList.length-1 && <Separator />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}