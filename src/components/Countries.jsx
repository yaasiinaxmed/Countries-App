import React, {useState , useEffect} from 'react'
import CountryCard from './CountryCard';
import Navbar from './Navbar';
import Footer from './Footer';

function Countries() {
    
    // useStates
    const [countries , setCountries] = useState([]);
    const [searchText , setSearchText] = useState([]);
    const [loading , setLoading] = useState(false);
    const [showScrollTop , setShowScrollTop] = useState(false);

    // array regions api
    const regions = [
        {
            link: "region/Europe",
            name: "Europe"
        },
        {
            link: "region/Asia",
            name: "Asia"
        },
        {
            link: "region/Africa",
            name: "Africa"
        },
        {
            link: "region/Oceania",
            name: "Oceania"
        },
        {
            link: "region/Americas",
            name: "Americas"

        },
        {
            link: "region/Antarctic",
            name: "Antarctic"
        }
    ];
    
    // fetch api countries useEffect
    useEffect(() => {
        const getCountries = async() => {
            try {
                setLoading(true);
                const res = await fetch(`https://restcountries.com/v3.1/all`)
                const data = await res.json()
                setCountries(data)
                setLoading(false)
            } 
            catch(error) {
                console.error(error)
            }
        }

        getCountries()
    }, []);

    // fetch api search countries
    async function searchCountry() {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
            const data = await res.json();
            setCountries(data)
        }
        catch (error) {
            console.error(error)
        }
    }

    // click search handle 
    const handleSearch = (e) => {
        e.preventDefault()
        searchCountry()
    }
 
    // filter by region function 
    async function FilterByRegion(region) {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/${region}`)
            const data = await res.json();
            setCountries(data)
        }
        catch (error)  {
            console.error(error)
        }
    }

    function handleFilterByRegion(e) {
        e.preventDefault()
        FilterByRegion()
    }

    // visiblity handle scroll button
    useEffect(() => {
        const handleScrollTopVisiblity = () => {
            window.pageYOffset > 300 ? setShowScrollTop(true) : setShowScrollTop(false);
        }

        window.addEventListener("scroll", handleScrollTopVisiblity);

        return () => {
            window.removeEventListener("scroll", handleScrollTopVisiblity);
        }

    }, []);

    // click handle scroll back top 
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>{loading ? ( 
        // loading for api waiting....
        <h1 className='text-gray-800 dark:text-white font-bold uppercase traccking-wide
         flex items-center justify-center h-screen text-4xl'>
           <span className="animate-spin h-8 w-8 mr-3 rounded-full border-4 border-gray-300 dark:border-gray-800 dark:border-l-white border-l-gray-800 "></span>
            Loading...
        </h1>
        ) : (
        <>
        {/* header component */}
         <Navbar/>
         {/* body section */}
          <section className='container mx-auto p-8 mt-[70px]'>            
           <div className='flex flex-col gap-4 md:flex-row justify-between'>
            {/* search form */}
            <form autoComplete='off' className='max-w-4xl md:flex-1 flex items-center justify-center
             bg-white dark:bg-slate-800 shadow rounded' onSubmit={handleSearch}>
                <input 
                type="text" 
                name="search" 
                id="search" 
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                required
                placeholder="Search for a country by its name" 
                className="py-2 px-4 text-gray-800 dark:bg-slate-800  dark:text-gray-400 placeholder-gray-800 dark:placeholder-gray-400 outline-none w-full "/>
                <button type="submit" className='pr-4 text-1xl dark:text-white text-gray-600'><ion-icon name="search-outline"></ion-icon></button>
            </form>
            {/* Filter by region */}
            <form onSubmit={handleFilterByRegion}>
                <select 
                name="filter-by-region" id="filter-by-region" 
                className='w-52 py-3 px-4 pr-8 outline-none dark:bg-slate-800 dark:hover:bg-slate-700  shadow rounded text-gray-600 dark:text-gray-400'
                value={regions.name}
                onChange={(e) => FilterByRegion(e.target.value)}>
                    <option value="all" >Filter by Region</option>
                    {regions.map((region, index) => (
                       <option key={index} value={region.link}>{region.name}</option>
                    ))}
                </select>
            </form>
           </div>
           {/* scroll top button */}
           {showScrollTop && (
            <div onClick={() => handleScrollTop()} className='fixed bottom-4 right-6 w-[60px] h-[60px] text-center line-heights-[60px] bg-white
            dark:bg-slate-700 rounded-full text-gray-600 shadow-md cursor-pointer hover:bg-gray-100
             dark:text-white text-2xl leading-[60px] dark:hover:bg-slate-800 transition-all ease-in-out ' id="scrollTop">
             <ion-icon name="chevron-up-outline"></ion-icon>
           </div>
           )}
           {/* all countries cards */}
           <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4'>
           {countries.map(country => 
                <CountryCard key={country.name.common} {...country}/>
            )}
           </div>
          </section>
          {/* footer component */}
          <Footer/>
        </>
        )}
        </>
    )
}

export default Countries;