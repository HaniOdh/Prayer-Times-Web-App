import './App.css'
import TodayPrayerCard from './components/TodayPrayerCard';
import NextPrayerCard from './components/NextPrayerCard';
import CalendarHeader from './components/CalendarHeader';
import CalendarPrayerPill from './components/CalendarPrayerPill';
import CalendarGrid from './components/CalendarGrid';

function App() {

  return (
    <div className='max-w-7xl mx-auto grid grid-cols-12 items-start gap-3'>
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
      <div className='col-span-6'>
        <CalendarHeader
          currentMonth={'June 2026'} 
        />
        <div className='flex gap-2'>
          <CalendarPrayerPill 
            prayer={'Asr'}
            time={'04:34 PM'}
          />
          <CalendarPrayerPill 
            prayer={'Asr'}
            time={'04:34 PM'}
          />
          <CalendarPrayerPill 
            prayer={'Asr'}
            time={'04:34 PM'}
          />
          <CalendarPrayerPill 
            prayer={'Asr'}
            time={'04:34 PM'}
          />
          <CalendarPrayerPill 
            prayer={'Asr'}
            time={'04:34 PM'}
          />
        </div>
        <CalendarGrid
          currentMonth={'2026-09-06'} 
        />
      </div>
    </div>
  )
}

export default App
