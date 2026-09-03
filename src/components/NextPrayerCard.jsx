import Timer from "./Timer";


export default function NextPrayerCard({nextPrayer, duration, time}){
    return(
        <div className="bg-primary-500 p-10 rounded-xl">
            <span className="text-primary-150 text-sm">NEXT PRAYER</span>

            <span className="flex gap-3 mt-2 items-baseline">
                <h2 className="font-heading text-5xl text-primary-50">{nextPrayer}</h2>
                <p className="text-primary-150 text-sm">at {time}</p>
            </span>

            <Timer
                key={duration} //to update the component whenever the duration between prayers changes
                duration={duration}
            />
        </div>
    );
}