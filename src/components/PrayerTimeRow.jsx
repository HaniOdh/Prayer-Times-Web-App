import StatusBadge from "./StatusBadge";


export default function PrayerTimeRow({icon, name, status, time}){
    return(
        status==='now' ? 
        <div className="flex w-full justify-between bg-primary-50 p-3 font-semibold text-primary-500 rounded-xl">
            <span className="flex gap-3">
                <span className="">{icon}</span>
                {name}
                <StatusBadge status={status}/>
            </span>
            <span>
                {time}
            </span>
        </div> 
        :
        <div className="flex w-full justify-between p-3">
            <span className="flex gap-3">
                <span>{icon}</span>
                {name}
                <StatusBadge status={status}/>
            </span>
            <span>
                {time}
            </span>
        </div>
    );
}