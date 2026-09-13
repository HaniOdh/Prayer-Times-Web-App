import Header from "./Header";
import PrayerDashboard from "./PrayerDashboard";


export default function Layout(){
    return(
        <div className='max-w-7xl mx-auto'>
            <Header />
            <PrayerDashboard />
        </div>
    );
}