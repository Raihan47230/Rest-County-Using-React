// import React from 'react';

import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";
import './Rest.css'

const Rest = () => {
     const [country,setCountry]=useState([])
     useEffect(()=>{
          fetch('https://restcountries.com/v3.1/all')
          .then(res=>res.json())
          .then(data=>setCountry(data))
     },[])
     return (
          <div className="rest">
               <h className="Titele">Nusrat Jahan Setu..$$..Raihan R</h>
               <h2>Total Country :{country.length}</h2>

               <div className="flexcibale">
               {
                      country.map(single=><SingleCountry key={single.ccn3} countryName={single}></SingleCountry>)
               }
               </div>
               
          </div>
          
     );
};

export default Rest;