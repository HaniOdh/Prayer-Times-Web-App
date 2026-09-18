import { useState, useEffect } from "react";
import { useNow } from "../hooks/useNow";
import Timer from "./Timer";
import { getNextPrayer } from "../utils/prayerHelpers";


export default function NextPrayerCard({ currentMonthTimes }){

    const now = useNow();
    const [todayNextPrayer, setTodayNextPrayer] = useState(null);

    const { nextPrayer, targetTime, formattedTime, remainingTime } = getNextPrayer(currentMonthTimes, now) || {};

    useEffect(() => {
        async () => setTodayNextPrayer(nextPrayer);
    }, [nextPrayer]);

    return(
        <div className="bg-primary-600 p-8 md:p-10 rounded-xl">
            <span className="text-primary-150 text-xs md:text-sm">NEXT PRAYER</span>

            <span className="flex gap-3 mt-2 items-baseline">
                <h1 className="font-heading text-4xl md:text-5xl text-primary-50">{nextPrayer}</h1>
                <p className="text-primary-150 text-sm">at {formattedTime}</p>
            </span>

            <Timer
                key={remainingTime} //to update the component whenever the duration between prayers changes
                duration={remainingTime}
            />
        </div>
    );
}