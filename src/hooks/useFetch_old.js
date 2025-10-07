import { useState, useEffect } from "react";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

function useFetch(url) {
  const[data, setData] = useState([]); // data
  const[isLoading, setLoading] = useState(true); // to show loading data
  const[error, setError] = useState(null); // for error

  useEffect(()=>{
    let ignore = false; // for cleanup and race condition
    
    // async function fetchData() {
    //   try {        
    //     setLoading(true);
    //     const res = await fetch(url);                   // using fetch()
    //     if(!res.ok) throw new Error('response failed');
    //     const fetcheddata = await res.json();
    //     if(!ignore) {setData(fetcheddata);}
    //   } catch(err) {
    //     if(!ignore) setError(err.message);
    //   } finally {
    //     if(!ignore) setLoading(false);
    //   }
    // }

    // using axios
    async function fetchData() {
      try {        
        setLoading(true);
        const res = await axios.get(url);
        if(!ignore) {setData(res.data);}
      } catch(err) {
        if(!ignore) setError(err.message);
      } finally {
        if(!ignore) setLoading(false);
      }
    }

    fetchData();
    return() => {ignore = true;}
  }, [url]);
  return({data, isLoading, error});
}

export default useFetch;

