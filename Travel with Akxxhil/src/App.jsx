import Tour from "./Components/Tour"
import data from "./data"
import { useState } from "react"
function App() {
  const [tour,setTour]=useState(data)
  function notIntrested(id){
    const newTour=tour.filter((tours)=>tours.id!==id)
    setTour(newTour)
  }
  function refreshHandler(){
    setTour(data)
  }
  if(tour.length ===0){
    return <div>
      <div>No tour Left</div>
      <button onClick={refreshHandler}>Refresh</button>

    </div>
  }
  return <>
    <div className="container">
      <Tour tour={tour} notIntrested={notIntrested} ></Tour>
    </div>
  </>
}

export default App