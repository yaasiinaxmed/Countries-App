import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({ flags, name, population, region, subregion }) {
  return (
    <>
    <Link to={`/${name.common}`}>
     <article className='bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-gray-700 shadow-lg rounded overflow-hidden'>
        <img src={flags.svg} alt={name.common} className='md:h-60 w-full object-cover'/>
        <div className="p-4 dark:text-gray-50">
        <h2 className='font-bold text-lg text-gray-900 dark:text-white mb-2'>{name.common}</h2>
        <ul className='flex flex-col items-start justify-start gap-2 dark:text-gray-300'>
            <li>Population: {population}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
        </ul>
        </div>
     </article>
    </Link>
    </>
  )
}

export default CountryCard