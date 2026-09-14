import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import DailySummary from "./DailySummary";


export default function MonthlyTimetable({ currentMonth, onMonthChange, selectedDate, onDateChange }){

    const handlePrevMonth = () => {
        const newMonth = currentMonth.subtract(1, 'month');
        onMonthChange(newMonth);
        onDateChange(newMonth.startOf('month').format('YYYY-MM-DD')); 
    }

    const handleNextMonth = () => {
        const newMonth = currentMonth.add(1, 'month');
        onMonthChange(newMonth);
        onDateChange(newMonth.startOf('month').format('YYYY-MM-DD'));
    }

    const mockDate = {
        hijri: "17 Rabīʿ al-awwal 1448",
        timings: {
            Fajr: "05:45 AM",
            Dhuhr: "12:37 PM",
            Asr: "04:15 PM",
            Maghrib: "06:30 PM",
            Isha: "07:53 PM"
        }
    };

    console.log("hello the selected date is:", {selectedDate});

    return(
        <div className="flex flex-col gap-5 p-7 border border-gray-300 rounded-xl">
            <CalendarHeader 
                currentMonth={currentMonth}
                onNextMonth={handleNextMonth}
                onPreviousMonth={handlePrevMonth}
            />

            <CalendarGrid 
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onSelectDay={onDateChange}
            />

            <DailySummary
                selectedDate={selectedDate}
                dayData={mockDate}
            />
        </div>
    );
}