import { ChevronDown, MapPin } from "lucide-react";


export default function LocationDropdown({selectedId, isDetecting, presetCities, onSelectChange}){

    const PRESET_CITIES = [
    { id: "mecca", name: "Mecca", latitude: 21.4225, longitude: 39.8262 },
    { id: "medina", name: "Medina", latitude: 24.4672, longitude: 39.6112 },
    { id: "cairo", name: "Cairo", latitude: 30.0444, longitude: 31.2357 },
    { id: "algiers", name: "Algiers", latitude: 36.7538, longitude: 3.0588 },
    { id: "istanbul", name: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
    { id: "london", name: "London", latitude: 51.5074, longitude: -0.1278 },
    ];
    presetCities = PRESET_CITIES;
    return(
        <div className="relative inline-block w-fit">
            <select 
                value={selectedId}
                onChange={onSelectChange}
                disabled={isDetecting}
                className="w-full min-w-[150px] appearance-none border border-gray-300 rounded-full py-2 pl-9 pr-10 font-medium  hover:cursor-pointer"
            >
                <option value="my-location">
                    {isDetecting ? "Detecting Location..." : "My Location"}
                </option>

                <option disabled className="text-gray-300">---------</option>

                {presetCities.map((city) => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                ))}

            </select>

            <MapPin className="absolute left-3 top-1/2 w-4 h-4 text-gray-600 -translate-y-1/2 pointer-events-none" />

            <ChevronDown className="absolute right-3 top-1/2 w-4 h-4 text-gray-600 -translate-y-1/2 pointer-events-none" />
        </div>
    );
}