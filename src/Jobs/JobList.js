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
     ? (
      <div>
       {jobs.map(job => (
          <JobCardInfo
              key={job.handle}
              handle={job.handle}
              name={job.companyName}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
              /> 
      ))}
      </div>
     ): <p> No Results have been found</p> 
      }
    </div>
  )
}

export default JobList;