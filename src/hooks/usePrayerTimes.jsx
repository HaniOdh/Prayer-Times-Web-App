import { useState, useEffect, useRef } from "react";



const BASE_URL = 'https://api.aladhan.com';

export function usePrayerTimes({ year, month, latitude, longitude }){

    const [times, setTimes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const abortControllerRef = useRef(null);

    useEffect(() => {
        if ( !year || !month || !latitude || !longitude ) return;

        const fetchPrayerTimes = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);
            setError(null);

            try{
                const response = await fetch(`${BASE_URL}/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}`,
                    { signal: abortControllerRef.current?.signal }
                );
                const data = await response.json();
                setTimes(data.data);
            }catch(e){
                if(e.name === "AbortError"){
                    console.log("Aborted");
                    return;
                }
                
                setError(e);
            }finally{
                setIsLoading(false);
            }
        }

        fetchPrayerTimes();

        return () => abortControllerRef.current?.abort();
    }, [year, month, latitude, longitude]);

    return{
        times,
        isLoading,
        error,
    };
}