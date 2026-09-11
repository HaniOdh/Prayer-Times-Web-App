import AwqatLogo from "./AwqatLogo";
import LocationDropdown from "./LocationDropdown";
import LanguageSwitchButton from "./LanguageSwitchButton";
import DarkModeSwitch from "./DarkModeSwitch";
import { useLocationDropdown } from "../hooks/useLocationDropdown";


export default function Header({onLocationChange}){
    const {
    selectedId,
    isDetecting,
    geoError,
    presetCities,
    handleSelectChange } = useLocationDropdown(onLocationChange);

    return(
        <div className="flex justify-between items-center my-6">
            <AwqatLogo />
            <div className="flex gap-2">
                <LocationDropdown
                    selectedId={selectedId}
                    isDetecting={isDetecting}
                    presetCities={presetCities}
                    onSelectChange={handleSelectChange}
                />
                <LanguageSwitchButton />
                <DarkModeSwitch />
            </div>
        </div>
    );
}