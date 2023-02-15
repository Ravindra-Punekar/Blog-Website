import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error ,setError] = useState(null);
    
  useEffect(()=>{
    const abortContr = new AbortController();

    setTimeout(()=>{
      fetch(url, {signal: abortContr.signal})
      .then(responce =>{
        // console.log(responce);
        if(!responce.ok){
          throw Error('could not fetch data');
        }
        return responce.json();
      })
      .then((data)=>{
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err=>{
        if(err.name === 'AbortError'){
          console.log('fetch aborted');
        }else{
          setIsPending(false);
          setError(err.message);
        }
      })
    },1000)

    return () => abortContr.abort();
  }, [url]);

  return { data, isPending, error}
}
 
export default useFetch;