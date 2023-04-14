import React, {useState} from 'react'

// search form used in companiesList and joblist to allow users to filter.

function SearchForm({searchingFor}) {

    const [ searchTerm, setSearchTerm ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        searchingFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input
                name="searchTerm"
                placeholder="Enter search term.."
                value={searchTerm}
                onChange={handleChange}
            />
            <button>
                Submit
            </button>
        </form>
    </div>
  )
}

export default SearchForm