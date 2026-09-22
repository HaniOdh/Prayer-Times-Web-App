import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import DailySummary from "./DailySummary";


export default function MonthlyTimetable({ currentMonth, onMonthChange, selectedDate, onDateChange, selectedDayData }){

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

    const dayData = {
        hijriDate: selectedDayData?.hijriDate,
        timings: selectedDayData?.timings,
    };

    return(
        <div className="flex flex-col gap-5 p-7 border border-border bg-card rounded-xl">
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
                dayData={dayData}
            />
        </div>
    );
}