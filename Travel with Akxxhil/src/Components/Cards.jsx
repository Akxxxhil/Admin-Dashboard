import { useState } from "react";
import './Cards.css'

function Cards({ id, name, info, image, price,notIntrested }) {

  const [readMore,setReadMore]=useState(false)
  const description=readMore ?info :`${info.substring(0,100)}...`

  function readmorehandler(){
    setReadMore(!readMore)
  }
  return (
    <>
      <div className="cards">
        <div className="tour-image">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="tour-price">{price}</div>
          <div className="tour-name">{name}</div>
        </div>
        <div className="tour-details">
          {description}
          <span className="Read-more" onClick={readmorehandler}>
            Read More
          </span>
        </div>

        <button onClick={()=>{notIntrested(id)}}>Not Intrested</button>
      </div>
    </>
  );
}
export default Cards;
