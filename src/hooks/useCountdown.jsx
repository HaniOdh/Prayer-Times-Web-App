import {useState, useEffect} from 'react';


export function useCountdown(initialDuration){

    const [timeLeft, setTimeLeft] = useState(initialDuration);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(0, prevTime-1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    let total_seconds = Math.floor(timeLeft / 1000);
    let total_minutes = Math.floor(total_seconds / 60);
    let total_hours = Math.floor(total_minutes / 60);

    let seconds = String(total_seconds % 60).padStart(2, '0');
    let minutes = String(total_minutes % 60).padStart(2, '0');
    let hours = String(total_hours % 24).padStart(2, '0');

    return {seconds, minutes, hours};
}