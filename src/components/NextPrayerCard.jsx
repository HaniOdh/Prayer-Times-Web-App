import { useNow } from "../hooks/useNow";
import Timer from "./Timer";
import { getNextPrayer } from "../utils/prayerHelpers";
import { useTranslation } from "react-i18next";


export default function NextPrayerCard({ currentMonthTimes }){

    const now = useNow();
    const { t } = useTranslation();

    const { nextPrayer, targetTime, formattedTime, remainingTime } = getNextPrayer(currentMonthTimes, now) || {};

    return(
        <div className="bg-primary p-8 md:p-10 rounded-xl">
            <span className="text-primary-foreground text-xs md:text-sm">{ t('Next_Prayer') }</span>

            <span className="flex gap-3 mt-2 items-baseline">
                <h1 className="font-heading text-4xl md:text-5xl text-primary-50">{ t(`${nextPrayer}`)}</h1>
                <p className="text-primary-foreground text-sm">at {formattedTime}</p>
            </span>

            <Timer
                key={remainingTime} //to update the component whenever the duration between prayers changes
                duration={remainingTime}
            />
        </div>
    );
}