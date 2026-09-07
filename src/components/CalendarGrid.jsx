import dayjs from 'dayjs';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


export default function CalendarGrid({currentMonth, selectedDate, onSelectDay}){

    const daysInMonth = dayjs(currentMonth).daysInMonth();
    const startDayOfWeek = dayjs(currentMonth).startOf('month').day();

    const paddingSlots = Array.from({ length: startDayOfWeek });
    const dayNumbers = Array.from({ length: daysInMonth }, (_, i) => i+1);

    const todayStr = dayjs().format('YYYY-MM-DD');

    return(
        <div className='bg-gray-100 rounded-xl p-3'>
            <div className='grid grid-cols-7 text-center text-xs mb-3'>
                {weekdays.map((day) => (
                    <div key={day} className='p-1'>{day}</div>
                ))}
            </div>

            <div className='grid grid-cols-7 gap-3'>
                {paddingSlots.map((_, index) =>(
                    <div key={index} className='h-10'/>
                ))}

                {dayNumbers.map((day) => {
                    const dateObj = dayjs(currentMonth).date(day);
                    const dateStr = dateObj.format('YYYY-MM-DD');

                    const isSelected = selectedDate === dateStr;
                    const isToday = todayStr === dateStr;

                    return(
                        <button
                            key={day}
                            onClick={() => onSelectDay(dateStr)}
                            className={`h-10 md:h-15 w-full rounded-md text-sm font-medium transition-colors flex items-center justify-center ${
                                isSelected
                                ? 'bg-primary-600 text-white font-bold'
                                : isToday
                                ? 'hover:bg-gray-200 hover:cursor-pointer border border-primary-600 bg-primary-50 text-primary-600 font-bold'
                                : 'hover:bg-gray-200 hover:cursor-pointer text-gray-600'
                            }`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}