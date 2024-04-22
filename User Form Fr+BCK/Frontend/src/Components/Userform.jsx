import axios from "axios";
import React, { useState } from "react";

function Userform() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");


  function namehandler(e) {
    setName(e.target.value);
  }
  function comapnyhandler(e) {
    setCompany(e.target.value);
  }
  function salaryhandler(e) {
    setSalary(e.target.value);
  }
  async function submithandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/userDetails", {
        Name: name,
        Company: company,
        Salary: salary,
      });
      console.log(response.data);
      setName("");
      setCompany("");
      setSalary("");
    } 
    catch (error) {
      console.error("Error:", response.error);
     }
    
  }
  return (
    <>
      <div>
        <h1>User Details</h1>
      </div>

      <div>
        <form onSubmit={submithandler}>
          <label htmlFor="">Enter Employee Full name</label>
          <input onChange={namehandler} value={name} type="text" />

          <label htmlFor="">Enter Company Name</label>
          <input onChange={comapnyhandler} value={company} type="text" />

          <label htmlFor="">Enter Salary</label>
          <input onChange={salaryhandler} value={salary} type="text" />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Userform;
