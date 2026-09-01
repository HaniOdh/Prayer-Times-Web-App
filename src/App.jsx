import './App.css'
import StatusBadge from './components/StatusBadge'
import PrayerTimeRow from './components/PrayerTimeRow'
import {Sun} from 'lucide-react';

function App() {

  return (
    <div className=''>
      <StatusBadge status='next' />
      <PrayerTimeRow
        icon={<Sun />}
        name={'Fajr'}
        status={'now'}
        time={'3:47PM'}
      />
    </div>
  )
}

export default App
