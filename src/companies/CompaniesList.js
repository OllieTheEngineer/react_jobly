import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import CompCard from './CompCard';
import SearchForm from '../auth_forms/SearchForm';

function CompaniesList() {
const [ companies, setCompanies ] = useState([]);

useEffect(function getCompaniesOnSearch() {
   search();
}, []);

async function search(name){
    let comps = await JoblyApi.getCompanies(name);
    setCompanies(comps)
}
console.log(companies)

  return (
    <div>
        <SearchForm searchingFor={search} />
        {companies.length
        ? (
            <div>
             {companies.map(comp => (
                <CompCard 
                    key={comp.handle}
                    handle={comp.handle}
                    name={comp.name}
                    description={comp.description}
                    logoUrl={comp.logoUrl}
                    /> 
            ))}
            </div> 
        ) : ( 
            <p> Sorry no results were found! </p>
        )}
    </div>
  )
}

export default CompaniesList;