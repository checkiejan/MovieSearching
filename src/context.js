import React, { useState, useContext} from 'react'
import useFetch from './useFetch';

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  
  const [query, setQuery] = useState("batman");
  const {data, error, loading} = useFetch(`&s=${query}`);
  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  // console.log(data);
  return <AppContext.Provider 
  value={{
    query,
    data,error, loading,
    handleChange
  }}
  >
  {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
 