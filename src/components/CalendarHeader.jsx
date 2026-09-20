import {ChevronLeft, ChevronRight} from 'lucide-react';
import { useTranslation } from 'react-i18next';


export default function CalendarHeader({currentMonth, onPreviousMonth, onNextMonth}){

    const { t } = useTranslation();

    return(
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <h2 className='font-heading text-2xl'>{ t('Monthly_Timetable') }</h2>
                <p className='text-sm text-muted-foreground'>{currentMonth.format('MMMM-YYYY')}</p>
            </div>
            <div className='flex gap-2'>
                <button
                    onClick={onPreviousMonth}
                    className='flex items-center justify-center w-10 h-10 border border-border rounded-full text-muted-foreground 
                    hover:bg-gray-200 dark:hover:bg-primary-950 hover:cursor-pointer'
                >
                    <ChevronLeft className='w-5 h-5' />
                </button>

                <button
                    onClick={onNextMonth}
                    className='flex items-center justify-center w-10 h-10 border border-border rounded-full text-muted-foreground
                    hover:bg-gray-200 dark:hover:bg-primary-950 hover:cursor-pointer'
                >
                    <ChevronRight className='w-5 h-5' />
                </button>
            </div>
        </div>
    );
}