import './App.css'
import TodayPrayerCard from './components/TodayPrayerCard';
import NextPrayerCard from './components/NextPrayerCard';

function App() {

  return (
    <div className='max-w-7xl mx-auto grid grid-cols-12 items-start'>
      <div className='flex flex-col gap-6 col-span-6'>
        <NextPrayerCard
          nextPrayer={"Isha"}
          duration={1.5 * 60 * 60 * 1000}
          time={"07:41 PM"}
        />

        <TodayPrayerCard
          location={"Mecca"}
          hijriDate={"17 Rabīʿ al-awwal 1448"}
          date={"Sunday, 30/08/2026"} 
          prayers={""}
        />
      </div>
    </div>
  )
}

export default App
