import { useEffect } from "react";
import { useState } from "react";
import "./Countries.css"
import Country from "../Country/Country";

 const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountries, setVisitedCountries]= useState([])
    const [visitedCountriesFlags, setVisitedCountriesFlags]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])
    const handleVisitedCountries = country=>{
        const newVisitedCountries =[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries);        
    }
    const handleVisitedCountriesFlags= flags=>{
        const newVisitedFlags=[...visitedCountriesFlags,flags]
        setVisitedCountriesFlags(newVisitedFlags);
    }
    console.log(visitedCountries.length);
    
    return (
        <div>
        <h2>Countries Info</h2>         
        <h4>Total Countries: {countries.length}</h4> 

{/* ............................. */}
        {
        visitedCountries.length > 0
                  ?  <div className="visited-countries-container">
                  <div>
                    <h2 >Visited countries: {visitedCountries.length}</h2>
                  </div>
                  <div className="list-container">
                  <div className="flag-container">
                      {
                          visitedCountriesFlags.map((flags, index)=><img key={index} src={flags}></img>)
                      }
                  </div>
                      <div>
                  <ol>  
                      {
                          visitedCountries.map(country=> <li className="visitedList" key={country?.cca2} >{country.name.common}</li>)
                      }
                  </ol>
                      </div>
                  </div>
                  </div>
                  : ""
        }
        {/* ......................... */}
      
        <h2>Countries to visit</h2>
        <div className="Countries-container">
        {
            countries.map(country=>
                 <Country 
                 key={country?.cca3} 
                 country={country}
                 handleVisitedCountries={handleVisitedCountries}
                 handleVisitedCountriesFlags={handleVisitedCountriesFlags}
                 visitedCountriesFlags={visitedCountriesFlags}
                 visitedCountries={visitedCountries}
                 >
                 </Country>)
        }  
        </div>
        </div>
    );
 };
 
 export default Countries;