import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import UseGif from "../Hooks/UseGif";

function Random() {
  // const [quote, setQuote] = useState("");
  // const[loading,setLoading]=useState(false)
  // const fetchdata = async function () {
  //   setLoading(true)
  //   const response = await fetch("https://api.quotable.io/random");
  //   const output = await response.json();
  //   console.log(output);
  //   setQuote(output);
  //   setLoading(false)
  // };
  // useEffect(() => {
    
  //   fetchdata();
  // }, []);
  // function clickhandler() {
  //   fetchdata();
  // }
  const{quote,loading,fetchdata}=UseGif()
   function clickhandler() {
    fetchdata();
  }
  return (
    <div>
      {loading ? (<Spinner></Spinner>): (<h3>{quote.content}</h3>)} <br />
      {/* <h3>{quote.content}</h3> <br /> <br /> */}
      <button className="p-1 bg-black text-white" onClick={clickhandler}>Generate</button>
    </div>
  );
}

export default Random;
