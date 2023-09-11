import {useState } from "react";
import "./Country.css"
const Country = ({country, handleVisitedCountries, handleVisitedCountriesFlags, visitedCountriesFlags, visitedCountries}) => {
    //destructing the data fields inside country object
    // console.log(country);
    const {name, flags, area, population}= country;
    const[visited, setVisited]= useState(false)
    const handleVisit=()=>{
        setVisited(!visited);
        // console.log(visited);
    }
    // const passWithParams=()=>{
    //     handleVisitedCountries(country)
    // }
    return (
        <div style={{borderColor: visited? 'red':'yellow',backgroundColor: visited? '#ffff':'transparent', color: visited? 'Black':'white'}} className="country-container">
            <h1 className="name">{name?.common}</h1>
            <img id="flag-png" src={flags?.png} alt="" />
            <h3>Population: {population} </h3>
            <h3>Total Area: {area} square KM</h3>
            {/* <h3>Language: {languages}</h3> */}
            {/* <button onClick={()=>
                {
                    handleVisit;
                    handleVisitedCountries(country);
                    handleVisitedCountriesFlags(country.flags?.png)
                }}>Mark Visited</button> */}
            <button onClick={()=>{handleVisitedCountriesFlags(country.flags?.png)}}>{visitedCountriesFlags? "Add Flag ":" Want to ad flag"}</button>
            <button onClick={()=>{handleVisitedCountries(country)}}>{visitedCountries? "Add Country":" Want to add Country"}</button>
            <button onClick={()=>handleVisit()}>{visited? "Visited":" Want to visited"}</button>
            <p >{visited ? 'You Have already Visited'  : "Do you want to visit?"}</p>
        </div>
    );
};

export default Country;