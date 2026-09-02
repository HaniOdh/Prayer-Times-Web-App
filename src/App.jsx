import './App.css'
import StatusBadge from './components/StatusBadge'
import PrayerTimeRow from './components/PrayerTimeRow'
import Separator from './components/Separator';
import {Sun} from 'lucide-react';

function App() {

  return (
    <div className='max-w-7xl m-auto'>
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
    </div>
  )
}

export default App
