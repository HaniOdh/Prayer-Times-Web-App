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
        <header className="flex flex-col md:flex-row gap-5 md:justify-between flex-start my-6">
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
        </header>
    );
}