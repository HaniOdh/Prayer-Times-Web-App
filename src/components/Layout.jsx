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
        <div className='px-4 xl:px-0 xl:max-w-7xl mx-auto'>
            <Header
                onLocationChange={setSelectedLocation}
            />
            <main className="pb-10" >
                <PrayerDashboard
                    selectedLocation={selectedLocation}
                />
            </main>
        </div>
    );
}