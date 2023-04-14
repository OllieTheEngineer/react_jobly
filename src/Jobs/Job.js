import React from 'react';
import JobCardInfo from "./JobCardInfo";

// loads list of jobs


function Job({jobs, apply}) {

  return ( 
    <div>
        {jobs.map(job => (
          <JobCardInfo 
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
           companyName={job.companyName}
           />
        ))}
    </div>
  );
}

export default Job