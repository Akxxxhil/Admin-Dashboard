import { useState } from "react";
import "./Cards.css";

function Cards({ id, name, info, image, price, notIntrested }) {
  const [readMore, setReadMore] = useState(false);
  const [color, setColor] = useState("black");
  const description = readMore ? info : `${info.substring(0, 100)}...`;

  function readmorehandler() {
    setReadMore(!readMore);
  }
  function favChanger() {
    setColor(color === "black" ? "pink" : "black");
  }
  return (
    <div className="cards-all">
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
          {readMore ? "Show Less" : `Read More`}
        </span>
      </div>

      <div className="ButtonsofBottom">
        <button
          className="NotIntrested"
          onClick={() => {
            notIntrested(id);
          }}
        >
          Not Intrested
        </button>
        <button style={{ backgroundColor: color }} onClick={favChanger}>Fav</button>
      </div>
    </div>
  );
}
export default Cards;
