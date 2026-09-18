import { ChevronDown, MapPin } from "lucide-react";


export default function LocationDropdown({
    selectedId, 
    isDetecting, 
    presetCities, 
    onSelectChange
}){

    return(
        <div className="relative inline-block w-fit">
            <select 
                value={selectedId}
                onChange={onSelectChange}
                disabled={isDetecting}
                className="w-full min-w-[150px] appearance-none border border-border rounded-full py-2 pl-9 pr-10 font-medium 
                hover:bg-gray-200 dark:hover:bg-black-900 dark:focus:bg-black-900 hover:cursor-pointer"
            >
                <option value="my-location">
                    {isDetecting ? "Detecting Location..." : "My Location"}
                </option>

                <option disabled className="text-gray-300">---------</option>

                {presetCities.map((city) => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                ))}

            </select>

            <MapPin className="absolute left-3 top-1/2 w-4 h-4 text-muted-foreground -translate-y-1/2 pointer-events-none" />

            <ChevronDown className="absolute right-3 top-1/2 w-4 h-4 text-muted-foreground -translate-y-1/2 pointer-events-none" />
        </div>
    );
}