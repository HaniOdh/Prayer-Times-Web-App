import { useCountdown } from "../hooks/useCountdown";


export default function Timer({duration}){

    const {seconds, minutes, hours} = useCountdown(duration);

    return(
        <div className="flex gap-8">
            <div className="flex-col">
                <div className="font-heading text-5xl md:text-6xl text-primary-50">{hours}</div>
                <p className="text-xs text-center mt-2 text-primary-150">HOURS</p>
            </div>

            <p className="text-5xl">:</p>

            <div className="flex-col">
                <div className="font-heading text-5xl md:text-6xl text-primary-50">{minutes}</div>
                <p className="text-xs text-center mt-2 text-primary-150">MINUTES</p>
            </div>

            <p className="text-5xl">:</p>

            <div className="flex-col">
                <div className="font-heading text-5xl md:text-6xl text-primary-50">{seconds}</div>
                <p className="text-xs text-center mt-2 text-primary-150">SECONDS</p>
            </div>
        </div>
    );
}