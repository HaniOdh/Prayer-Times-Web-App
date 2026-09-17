


export default function Timer({ duration = 0 }){

    const total_seconds = Math.floor(duration / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);

    const seconds = String(total_seconds % 60).padStart(2, '0');
    const minutes = String(total_minutes % 60).padStart(2, '0');
    const hours = String(total_hours % 24).padStart(2, '0');

    return(
        <span className="flex gap-4 md:gap-8 mt-8">
            <div className="flex-col">
                <div className="font-heading text-5xl md:text-6xl text-primary-50">{hours}</div>
                <p className="text-xs text-center mt-2 text-primary-150">HOURS</p>
            </div>

            <p className="text-4xl md:text-5xl text-primary-150">:</p>

            <div className="flex-col">
                <div className="font-heading text-5xl md:text-6xl text-primary-50">{minutes}</div>
                <p className="text-xs text-center mt-2 text-primary-150">MINUTES</p>
            </div>

            <p className="text-4xl md:text-5xl text-primary-150">:</p>

            <div className="flex-col">
                <div className="font-heading text-5xl md:text-6xl text-primary-50">{seconds}</div>
                <p className="text-xs text-center mt-2 text-primary-150">SECONDS</p>
            </div>
        </span>
    );
}