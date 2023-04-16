import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from '../api';
import JobCardInfo from '../Jobs/JobCardInfo';
//  Page for comany details

function CompanyCardInfo() {
    const { handle } = useParams();
    console.debug("DetailOfCompany", "handle=", handle);

    const [ company, setCompany ] = useState(null);

    useEffect(function getCompsAndJobs() {
        async function getCompanies() {
            setCompany(await JoblyApi.getCompanies(handle));
        }

        getCompanies();
    }, [handle]);
  return (
    <div>
            <h4>{company.name}</h4>
            <p>Description: {company.description}</p>
            <JobCardInfo job={company.jobs} />
    </div>
  )
}

export default CompanyCardInfo;