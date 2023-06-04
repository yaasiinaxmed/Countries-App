import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Country() {
  
  const [country , setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async() => {
        try {
            setLoading(true)
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await res.json()
            setCountry(data)
            setLoading(false)
        }
        catch (error) {
            console.error(error)
        }
    }
    getCountry()
  }, [name])

  return (
    <>
    { loading ? (
        <h1 className='w-full h-screen dark:text-white text-gray-800 font-bold uppercase text-3xl tracking-wide flex items-center justify-center'>
           <span className='animate-spin w-8 h-8 rounded-full mr-4 border-4 border-gray-300 dark:border-gray-800 border-l-gray-800 dark:border-l-gray-300'></span>
            loading.....
        </h1>
    ) : (
     <section className='mt-[70px] md:mt-0 p-8 md:py-0 max-w-7xl mx-auto'>
        <Navbar/>
     {country.map((item) => (
         <div key={item.population} className='grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen'>
            <article>
                <img src={item.flags.svg} alt={item.name.common}/>
            </article>
            <article>
                <h1 className='font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl'>{item.name.official}</h1>
                <ul className='mt-4 flex flex-col items-start justify-start gap-1 dark:text-gray-300'>
                    <li><span className='font-bold'>Capital:</span> {item.capital[0]}</li>
                    <li><span className='font-bold'>Population:</span> {item.population} </li>
                    <li><span className='font-bold'>Region:</span> {item.region}</li>
                    <li><span className='font-bold'>SubRegion:</span> {item.subregion}</li>
                </ul>
                {item.borders && 
                <>
                <h3 className='font-bold text-2xl my-2 dark:text-white'>Borders</h3>
                <ul className='grid grid-cols-4 gap-2 font-medium w-full '>
                    {item.borders.map((border, index) => (
                        <li key={index} className='flex items-center justify-center dark:text-gray-400 bg-white py-2 px-3 tracking-wide shadow rounded dark:bg-slate-800'>{border}</li>
                    ))}
                </ul>
                </>
                }
              <Link to="/" className='mt-8 inline-block p-3 bg-white shadow hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white text-gray-800 rounded'>&larr; Back</Link>
            </article>
         </div>
     ))}
    </section> 
    )}
    <Footer/>
   </>
  
  )
}
