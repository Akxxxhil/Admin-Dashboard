import { useState } from "react"

function Project() {
  const [data, setData] = useState({ firstname: "", lastname: "", email: "", street: "", city: "", state: "", radio: "", checked: false, country: "India", Comments: false, Candidates: false, Offers: false })
 
  function changehandler(event) {
    const { name, value, type, checked } = event.target
    setData((prevdata) => {

      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value
      }


    })

  }
  function submitHandler(event){
event.preventDefault();
console.log(data);
  }
  return <>
    <form onSubmit={submitHandler}>
      <label htmlFor=""> Fist Name</label>
      <br />
      <input name="firstname" value={data.firstname} onChange={changehandler} type="text" />
      <br /><br />

      <label htmlFor=""> Last Name</label>
      <br />
      <input name="lastname" value={data.lastname} onChange={changehandler} type="text" />
      <br /><br />


      <label htmlFor=""> Email Address</label>
      <br />
      <input name="email" value={data.email} onChange={changehandler} type="text" />
      <br /><br />


      <select name="country" id="country" onChange={changehandler} value={data.country} >
        <option value="India">India</option>
        <option value="England">England</option>
        <option value="UK">UK</option>
      </select>
      <br /><br />


      <label htmlFor=""> street Address</label>
      <br />
      <input name="street" value={data.street} onChange={changehandler} type="text" />
      <br /><br />

      <label htmlFor=""> City</label>
      <br />
      <input name="city" value={data.city} onChange={changehandler} type="text" />
      <br /><br />


      <label htmlFor=""> state</label>
      <br />
      <input name="state" value={data.state} onChange={changehandler} type="text" />
      <br /><br />


      <input checked={data.Comments} onChange={changehandler} type="checkbox" name="Comments" id="" value={data.Comments} />
      <label htmlFor="">Comments</label>

      <input checked={data.Candidates} onChange={changehandler} type="checkbox" name="Candidates" id="" value={data.Candidates} />
      <label htmlFor="">Candidates</label>

      <input checked={data.Offers} onChange={changehandler} type="checkbox" name="Offers" id="" value={data.Offers} />
      <label htmlFor="">Offers</label>

      <br /><br />

      <input value="everything" onChange={changehandler} type="radio" name="radio" id="" />
      <label htmlFor="">everything</label>
      <input value="same" onChange={changehandler} type="radio" name="radio" id="" />
      <label htmlFor="">same</label>
      <input value="Nopush" onChange={changehandler} type="radio" name="radio" id="" />
      <label htmlFor="">No push</label>
      <br /><br />


      <button>Save</button>




    </form>

  </>
}
export default Project