import React, { useState } from 'react';
import './Country.css';


const Country = ({country,handleVisited}) => {
    
 const [value, setValue] = useState(false);
const handlevisited=()=>{
    if(value){
        setValue(false);
    }
    else{
        setValue(true)
    }
    handleVisited(country);
}
    return (
        <div className='country'>
           <div className='size'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Populaton: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
           </div>
            <button className='btn' onClick={handlevisited}>{value ? 'Visited':'Not Visited'}</button>
            
        </div>
    );
};

export default Country;