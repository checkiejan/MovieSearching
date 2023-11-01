import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {handleChange, error, query} = useGlobalContext();
  return <form className='search-form'>
    <h2>search movies</h2>
    <input 
     type="text"
     className="form-input"
     onChange = {(e) => handleChange(e)}
     value={query}
    >
    </input>
    <div className="error">{error}</div>
  </form>
}

export default SearchForm
 