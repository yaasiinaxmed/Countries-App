import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/:name" element={<CountryInfo />}></Route>
      <Route path="/" element={<Countries />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
