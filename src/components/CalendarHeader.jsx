import {ChevronLeft, ChevronRight} from 'lucide-react';


export default function CalendarHeader({currentMonth, onPreviousMonth, onNextMonth}){
    return(
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <h2 className='font-heading text-2xl'>Monthly timetable</h2>
                <p className='text-sm text-gray-500'>{currentMonth.format('MMMM-YYYY')}</p>
            </div>
            <div className='flex gap-2'>
                <button
                    onClick={onPreviousMonth}
                    className='flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full text-gray-600 
                    hover:bg-gray-200 hover:cursor-pointer'
                >
                    <ChevronLeft className='w-5 h-5' />
                </button>

                <button
                    onClick={onNextMonth}
                    className='flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full text-gray-600
                    hover:bg-gray-200 hover:cursor-pointer'
                >
                    <ChevronRight className='w-5 h-5' />
                </button>
            </div>
        </div>
    );
}