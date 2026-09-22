import { useState, useEffect, useCallback } from "react";


export const PRESET_CITIES = [
    { id: "mecca", name: "Mecca", latitude: 21.4225, longitude: 39.8262 },
    { id: "medina", name: "Medina", latitude: 24.4672, longitude: 39.6112 },
    { id: "cairo", name: "Cairo", latitude: 30.0444, longitude: 31.2357 },
    { id: "algiers", name: "Algiers", latitude: 36.7538, longitude: 3.0588 },
    { id: "istanbul", name: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
    { id: "london", name: "London", latitude: 51.5074, longitude: -0.1278 },
    ];

export function useLocationDropdown(onCityChange){

    const [selectedId, setSelectedId] = useState("my-location");
    const [isDetecting, setIsDetecting] = useState(false);
    const [geoError, setGeoError] = useState(null);

    const fallbackToDefault = useCallback(() => {
        const defaultCity = PRESET_CITIES[0];
        setSelectedId(defaultCity.id);
        if(onCityChange){
            onCityChange({
                name: defaultCity.name,
                latitude: defaultCity.latitude,
                longitude: defaultCity.longitude,
                isCurrentLocation: false,
            });
        }
    }, [onCityChange]);

    const requestUserLocation = useCallback(() => {
        if(!navigator.geolocation){
            setGeoError("Geolocation not supported");
            fallbackToDefault();
            return;
        }

        setIsDetecting(true);
        setGeoError(null);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setIsDetecting(false);
                setSelectedId("my-location");

                if(onCityChange){
                    onCityChange({
                        name: "My Location",
                        latitude,
                        longitude,
                        isCurrentLocation: true,
                    })
                }
            },
            (error) => {
                console.warn("Geolocation permission error,", error.message);
                setIsDetecting(false);
                setGeoError("Permission denied");
                fallbackToDefault();
            },
            { timeout: 10000, enableHighAccuracy: true }
        );
    }, [onCityChange, fallbackToDefault]);

    useEffect(() => { 
        const timeoutId = setTimeout(() => {
            requestUserLocation();
        }, 0);
        return () => clearTimeout(timeoutId);
    }, [requestUserLocation]);

    const handleSelectChange = (e) => {
        const value = e.target.value;

        if( value === "my-location" ){ 
            requestUserLocation();
        } else{
            const city = PRESET_CITIES.find((item) => item.id === value);
            if(city) {
                setSelectedId(city.id);
                if(onCityChange){
                    onCityChange({
                        name: city.name,
                        latitude: city.latitude,
                        longitude: city.longitude,
                        isCurrentLocation: false,
                    });
                }
            }
        }
    };

    return{
        selectedId,
        isDetecting,
        geoError,
        presetCities: PRESET_CITIES,
        handleSelectChange,
    };
}