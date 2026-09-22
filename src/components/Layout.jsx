import { useState } from "react";
import Header from "./Header";
import PrayerDashboard from "./PrayerDashboard";


export default function Layout(){

    const [selectedLocation, setSelectedLocation] = useState({
        id: "algiers", 
        name: "Algiers", 
        latitude: 36.7538, 
        longitude: 3.0588
    });

    return(
        <div className='max-w-xs sm:max-w-sm md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto'>
            <Header
                onLocationChange={setSelectedLocation}
            />
            <PrayerDashboard
                selectedLocation={selectedLocation}
            />
        </div>
    );
}