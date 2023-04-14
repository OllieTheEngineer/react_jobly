import React from 'react';
import { Link } from "react-router-dom";


  // Show some information about a company

  function CompCard({name, description, logoUrl, handle}) {
    console.debug("CompCard", logoUrl)

  return (
    <Link to={`/companies/${handle}`}>
    <div>
        <h6>
            {name}
            {logoUrl && <img src={logoUrl}
                             alt={name}/>}
        </h6>
        <p>{description}</p>
    </div>
    </Link>
  )
}

export default CompCard;