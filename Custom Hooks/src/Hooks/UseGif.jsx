import React from 'react'
import { useState,useEffect } from 'react';

function UseGif() {
    const [quote, setQuote] = useState("");
    const[loading,setLoading]=useState(false)
    const fetchdata = async function () {
      setLoading(true)
      const response = await fetch("https://api.quotable.io/random");
      const output = await response.json();
      console.log(output);
      setQuote(output);
      setLoading(false)
    };
    useEffect(() => {
      
      fetchdata();
    }, []);
    return { quote, loading, fetchdata };
}

export default UseGif
