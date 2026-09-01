import StatusBadge from "./StatusBadge";


export default function PrayerTimeRow({icon, name, status, time}){
    return(
        status==='now' ? 
        <span className="flex m-auto w-full justify-between bg-primary-50 p-3 font-semibold text-primary-500">
            <span className="flex gap-3">
                <span className="">{icon}</span>
                {name}
                <StatusBadge status={status}/>
            </span>
            <span>
                {time}
            </span>
        </span> 
        :
        <span className="flex m-auto w-full justify-between p-3">
            <span className="flex gap-3">
                <span>{icon}</span>
                {name}
                <StatusBadge status={status}/>
            </span>
            <span>
                {time}
            </span>
        </span>
    );
}