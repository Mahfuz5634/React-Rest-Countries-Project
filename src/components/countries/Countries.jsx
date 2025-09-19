import React, { useState } from 'react';
import {use} from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({alldata}) => {

    const [val,Setval]=useState([]);

    const handleVisited =(countryName) =>{
        const newcoun=[...val,countryName];
        Setval(newcoun);

    }
    let data=use(alldata);
    const countries=data.countries;
    return (
        <>
        <h1>All Countries In The World</h1>
        <p>Visted Countries:{val.length}</p>
        <ol>
           {
            val.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
           }
        </ol>
         <div className='countries'>
            {
                countries.map(country=><Country key={country.cca3.cca3} handleVisited={handleVisited} country={country}></Country>)
            }
         </div>
            
        
        </>
    );
};

export default Countries;