import React from "react";
import {useState, useEffect} from 'react';

const urlMain = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (urlParam) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // console.log(urlParam);
    const fetchAPI = async() => {
        try {
            setLoading(true);
            const res = await fetch(`${urlMain}&${urlParam}`);
            const ret = await res.json();
            if(ret.Response === 'True'){
                if(Array.isArray(ret.Search)){
                    setData(ret.Search);
                }else{
                    // console.log("hi");
                    setData(ret);
                }
                setError('');
            }else{
                setError(ret.Error);
            }
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchAPI();
    },[urlParam]);
    return {data, error, loading};
}

export default useFetch