import './App.css'
import StatusBadge from './components/StatusBadge'
import PrayerTimeRow from './components/PrayerTimeRow'
import Separator from './components/Separator';
import TodayPrayerCard from './components/TodayPrayerCard';
import {Sun} from 'lucide-react';

function App() {

  return (
    <div className='max-w-7xl m-auto grid-col-12'>
      <StatusBadge status='next' />

      <PrayerTimeRow
        icon={<Sun />}
        name={'Fajr'}
        status={''}
        time={'3:47PM'}
      />

      <Separator />

      <PrayerTimeRow
        icon={<Sun />}
        name={'Fajr'}
        status={'now'}
        time={'3:47PM'}
      />

      <Separator />

      <PrayerTimeRow
        icon={<Sun />}
        name={'Fajr'}
        status={'next'}
        time={'3:47PM'}
      />

      <Separator />

      <PrayerTimeRow
        icon={<Sun />}
        name={'Fajr'}
        status={'none'}
        time={'3:47PM'}
      />

      <TodayPrayerCard
        location={"Mecca"}
        hijriDate={"17 Rabīʿ al-awwal 1448"}
        date={"Sunday, 30/08/2026"} 
        prayers={""}
      />
    </div>
  )
}

export default App
