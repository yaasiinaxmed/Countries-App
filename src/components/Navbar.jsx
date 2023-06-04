import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    const [theme , setTheme] = useState('light');

    useEffect(() => {
        if(localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light')
        }
    }, []);

    useEffect(() => {
        
        const html = document.querySelector('html');

        if(localStorage.getItem('theme') === 'dark'){
            html.classList.add('dark');
            setTheme('dark');
        }else {
            html.classList.remove('dark');
            setTheme('light');
        }

    }, [theme])

    const handleThemeSwitch = () => {
        if(localStorage.getItem('theme') === 'light' ) { 
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <div className="fixed top-0 left-0 flex items-center justify-between px-10 md:px-20 h-[70px] w-full bg-white shadow-md dark:bg-slate-800">
            <Link to="/" className="font-bold text-2xl text-gray-800 dark:text-white">Countries App</Link>
            <div className="flex cursor-pointer gap-2 items-center justify-center" onClick={() => handleThemeSwitch(!theme)} >
                <span className="p-3 w-[40px] h-[40px] rounded flex itemsc-center justify-center text-center bg-gray-100 shadow dark:bg-slate-700 dark:text-gray-100"><ion-icon name={theme === 'dark' ? 'sunny' : 'moon'}></ion-icon></span>
                <span className="hidden md:flex font-[600] dark:text-white text-xl font-[Poppins]">{theme === 'dark' ? 'Light Mode' : 'dark Mode'}</span>
            </div>
        </div>
    )
}

export default Navbar;