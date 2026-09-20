import StatusBadge from "./StatusBadge";
import { useTranslation } from "react-i18next";


export default function PrayerTimeRow({icon, name, status, time}){
    
    const { t } = useTranslation();

    return(
        status==='now' ? 
        <div className="flex w-full justify-between bg-primary-50 py-3 md:p-3 font-semibold text-primary rounded-xl">
            <span className="flex gap-3">
                <span className="">{icon}</span>
                { t(`${name}`) }
                <StatusBadge status={status}/>
            </span>
            <span>
                {time}
            </span>
        </div> 
        :
        <div className="flex w-full justify-between py-3 md:p-3">
            <span className="flex gap-3">
                <span>{icon}</span>
                { t(`${name}`) }
                <StatusBadge status={status}/>
            </span>
            <span>
                {time}
            </span>
        </div>
    );
}