import React from 'react'

export default function Footer() {
    return (
        <div className='w-full h-30 py-6 bg-white dark:bg-slate-800 shadow flex flex-col gap-2 items-center justify-center overflow-hidden'>
            <a href="https://yaasiinahmed.ml" target="_blank" className='text-gray-800 dark:text-gray-50 font-bold text-1xl md:text-2xl'>
                By Created <span className='text-sky-500 font-[Poppins]'>Yaasiin Ahmed</span>
            </a>
            <ul className='flex items-center justify-center gap-3 text-gray-800 dark:text-white text-2xl'>
                <a href="https://github.com/yaasiinaxmed" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                <a href="https://app.slack.com/client/T01EGNU0K5Y/D0450SBG6PL/rimeto_profile/U045DFJQ8HX" target='_blank'><ion-icon name="logo-slack"></ion-icon></a>
            </ul>
        </div>
    )
}