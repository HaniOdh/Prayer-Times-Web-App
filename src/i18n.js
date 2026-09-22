import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    Next_Prayer: 'NEXT PRAYER',
                    Hours: 'HOURS',
                    Minutes: 'MINUTES',
                    Seconds: 'SECONDS',
                    Today_Times: "Today's times",
                    Monthly_Timetable: "Monthly timetable",
                    Awqat: 'Awqat',
                    Prayer_Times: 'PRAYER TIMES',
                    Fajr: 'Fajr',
                    Sunrise: 'Sunrise',
                    Dhuhr: 'Dhuhr',
                    Asr: 'Asr',
                    Maghrib: 'Maghrib',
                    Isha: 'Isha',
                    Sunday: 'Sunday',
                    Monday: 'Monday',
                    Tuesday: 'Tuesday',
                    Wednesday: 'Wednesday',
                    Thursday: 'Thursday',
                    Friday: 'Friday',
                    Saturday: 'Saturday',
                    My_Location: 'My Location',
                    Detecting_Location: 'Detecting Location...',
                    Mecca: 'Mecca',
                    Medina: 'Medina',
                    Cairo: 'Cairo',
                    Algiers: 'Algiers',
                    Istanbul: 'Istanbul',
                    London: 'London',
                    at: 'at',
                }
            },
            ar: {
                translation: {
                    Next_Prayer: 'الصلاة القادمة',
                    Hours: 'ساعات',
                    Minutes: 'دقائق',
                    Seconds: 'ثوان',
                    Today_Times: "مواقيت اليوم",
                    Monthly_Timetable: "الجدول الشهري",
                    Awqat: 'أوقات',
                    Prayer_Times: 'مواقيت الصلاة',
                    Fajr: 'الفجر',
                    Sunrise: 'الشروق',
                    Dhuhr: 'الظهر',
                    Asr: 'العصر',
                    Maghrib: 'المغرب',
                    Isha: 'العشاء',
                    Sunday: 'الأحد',
                    Monday: 'الإثنين',
                    Tuesday: 'الثلاثاء',
                    Wednesday: 'الأربعاء',
                    Thursday: 'الخميس',
                    Friday: 'الجمعة',
                    Saturday: 'السبت',
                    My_Location: 'موقعي الحالي',
                    Detecting_Location: '...تحديد الموقع',
                    Mecca: 'مكة المكرمة',
                    Medina: 'المدينة المنورة',
                    Cairo: 'القاهرة',
                    Algiers: 'الجزائر',
                    Istanbul: 'اسطنبول',
                    London: 'لندن',
                    at: 'على',
                }
            }
        }
    })