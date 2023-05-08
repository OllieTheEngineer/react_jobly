import React, {useContext, useState} from 'react';
import UserContext from '../auth_forms/UserContext';

//  shows some information about a job

function JobCardInfo({id, title, salary, equity, companyName}) {

    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [ applied, setApplied] = useState("");

    // React.useEffect(function updateAppliedToJobStatus() {
    //     setApplied(hasAppliedToJob(id));
    // }, [id, hasAppliedToJob]);

    async function handleApply(evt) {
        if (hasAppliedToJob(id)) 
        return;
        applyToJob(id);
        setApplied(true);
    }
  return (
    <div> {applied}
    <div>
        <h6>{title}</h6>
        <p>{companyName}</p>
        {salary && <div> Salary: {formatSalary(salary)}</div>}
        {equity !== undefined && <div> Equity: {equity}</div>}
        <button
            onClick={handleApply}
            disabled={applied}
        >
            {applied ? "Applied" : "Apply"}
        </button>
    </div>
    </div>
  )
}

/** Render integer salary like '$1,250,343' */

function formatSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();
  
    for (let i = salaryStr.length - 1; i >= 0; i--) {
      digitsRev.push(salaryStr[i]);
      if (i > 0 && i % 3 === 0) digitsRev.push(",");
    }
  
    return digitsRev.reverse().join("");
}

export default JobCardInfo;