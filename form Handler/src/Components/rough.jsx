// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState({ firstname: "", lastname: "",checkbox:false,mode:"" });
  
// console.log(data);
// function changeHandler(event) {
//   const { name, type, value, checked } = event.target;
//   setData((previousstate) => ({
//     ...previousstate,
//     [name]: type === "checkbox" ? checked : value
//   }));
// }


//   return (
//     <>
//       <form >
//       <input name='firstname' onChange={changeHandler} type="text" placeholder='firstName' value={data.firstname} /> 
//       <br /> <br />
//       <input value={data.lastname} name='lastname' onChange={changeHandler} type="text" placeholder='lastName' />
//       <br />
//       <input type="checkbox" name="checkbox" value={data.checkbox} id='checkbox' onChange={changeHandler}
//       checked={data.checkbox}  />
//       <label htmlFor="checkbox">hello</label>
//       <br />

      
//       <input value="Online-mode" onChange={changeHandler}  type="radio" name="mode" id="Online-mode" checked={data.mode==="Online-mode"} />
//       <label htmlFor="Online-mode">Online</label>
//       <input value="Ofline-mode" onChange={changeHandler} type="radio" name="mode" id="Ofline-mode" checked={data.mode==="Ofline-mode"} />
//       <label htmlFor="Ofline-mode">Ofline-mode</label>
//       </form>
//     </>
//   );
// }

// export default App;


//here we used the value for saving the details from the data to value