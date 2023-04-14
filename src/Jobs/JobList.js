import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import JobCardInfo from './JobCardInfo';
import SearchForm from '../auth_forms/SearchForm';


function JobList() {
  console.debug("JobList");

const [ jobs, setJobs ] = useState([]);

useEffect(function getAllJobs() {
    search();
}, []);

async function search(title){
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
}
console.log(jobs)

  return (
    <div>
      <SearchForm searchingFor={search} />
      {jobs.length
      ? <JobCardInfo job={jobs}/>
      : <p> No Results have been found</p> 
      }
    </div>
  )
}

export default JobList;