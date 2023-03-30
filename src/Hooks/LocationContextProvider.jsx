import {useState } from "react";
import { LocationContext } from "./LocationContext";
import React from 'react'



const supportedCountryCodes = []

const regionNames = new Intl.DisplayNames(
    ['en'], {type: 'region'}
  );

let supportedCountries = [] 
supportedCountryCodes.forEach(country=>{
    supportedCountries.push(regionNames.of(country))
})

function LocationContextProvider({children}) {

  const [destination,setDestination] = useState(regionNames.of("US"))
  return (
    <LocationContext.Provider value={[destination,setDestination,supportedCountries]}>
        {children}
    </LocationContext.Provider>
  )
}


export default LocationContextProvider

