import React from 'react';
import {use} from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({alldata}) => {
    let data=use(alldata);
    const countries=data.countries;
    console.log(countries);
    return (
        <>
        <h1>All Countries</h1>
         <div className='countries'>
            {
                countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
            }
         </div>
            
        
        </>
    );
};

export default Countries;