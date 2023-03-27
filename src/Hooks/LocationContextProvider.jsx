import {useState } from "react";
import { LocationContext } from "./LocationContext";
import React from 'react'

const supportedCountryCodes = [
    "AE","AR","AS","AT","AU","BE","BR","CA",
    "CH","CL","CN","CO","DE","DK","ES","FI",
    "FR","GB","GR","HK","HU","ID","IE","IN",
    "IS","IT","JP","KR","MX","MY","NL",
    "NO","NZ","PE","PH","PT","SE","SG","TH","TR",
    "TW","US","VN","XE","ZA"
]

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

