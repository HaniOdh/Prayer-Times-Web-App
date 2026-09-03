import './App.css'
import TodayPrayerCard from './components/TodayPrayerCard';
import Timer from './components/Timer';

function App() {

  return (
    <div className='max-w-7xl m-auto grid-col-12'>

      <TodayPrayerCard
        location={"Mecca"}
        hijriDate={"17 Rabīʿ al-awwal 1448"}
        date={"Sunday, 30/08/2026"} 
        prayers={""}
      />

      <Timer
        duration={2 * 60 * 60 * 1000}
      />
    </div>
  )
}

export default App
