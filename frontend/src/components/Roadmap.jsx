import '../component_styles/Roadmap.css';
import { useState } from "react";

function Roadmap() {
 const [value, setValue] = useState("");

  function handleChange(e) {
    let num = Number(e.target.value);

    if (num < 0) num = 0;
    if (num > 100) num = 100;

    if (value === 0) {
    setValue("");
    return;
    }
    setValue(num);
  }

  return (

    <div className = "outer-container">
      <div className = "middle-container">

        <div className='points-container'>
            <p className='point-value'>{value} Points </p>
            <p className='total-points'>Total Points</p>
        </div>
        


      <div className='inner-container'>
          <div className='progress-bar'>
             <div
              className="golf-cart"
              style={{ left: `${value}%` }}
            >
              🛺
            </div>
          <div className='progress-bar-details'
            style={{ width: `${value}%` }}>
            </div>
        </div>
    

      <p>{value}%</p>

       <input
        type="number"
        value={value}
        min="0"
        max="100"
        onChange={handleChange}
      />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;