// import '../component_styles/Progress.css'

// function Progress({ activities }) {
//   return (
//     <div className = "outer-container">
//       <div className = "middle-container">

//           <div className='points-container'>
//             <p className='point-value'> Progress </p>
import "../component_styles/Progress.css";
import { useState, useEffect } from "react";

function Progress() {
  const [activities, setActivities] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [error, setError] = useState("");

  useEffect(function () {
    loadActivities();
  }, []);

  async function loadActivities() {
    try {
      const uri = backend_uri + "/activities";
      const res = await fetch(uri);
      const data = await res.json();

      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i].points;
      }

      setTotalPoints(sum);
      setActivities(data);
      setError("");
    } catch (err) {
      setError("Error: " + err);
    }
  }

  return (
    <div className="outer-container">
      <div className="middle-container">
        <div className="points-container">
          <p className="point-value"> Progress </p>
        </div>

        <div className="table-container">
          <table className="progress-table">
//             <thead>
//               <tr className="table-headers">
//                   <td>Actitivty</td>
//                   <td>Points</td>
//                   <td>Total After</td>
//                   <td>Date</td>
//                 </tr>
//                 </thead>

//             <tbody className='table-data'>
//           {activities.map((a, index) => (
//             <tr key={index}>
//               <td>{a.activityName}</td>
//               <td>{a.points}</td>
//               <td>{a.totalAfter}</td>
//               <td>{a.date}</td>
//             </tr>
//           ))}
//         </tbody>


//           </table>
//         </div>

            <tr className="table-headers">
              <td>Activity</td>
              <td>Points</td>
              <td>Total After</td>
              <td>Date</td>
            </tr>

            {/* Made up data need to connect later */}
            <tr className="table-data">
              <td>Team lift</td>
              <td>+6</td>
              <td>164</td>
              <td>2025-02-20</td>
            </tr>

            <tr className="table-data">
              <td>Short game practice</td>
              <td>+8</td>
              <td>164</td>
              <td>2025-02-19</td>
            </tr>

            <tr className="table-data">
              <td>Putter game</td>
              <td>+4</td>
              <td>164</td>
              <td>2025-02-21</td>
            </tr>

            <tr className="table-data">
              <td>Team lift</td>
              <td>+6</td>
              <td>164</td>
              <td>2025-02-20</td>
            </tr>

            <tr className="table-data">
              <td>Short game practice</td>
              <td>+8</td>
              <td>164</td>
              <td>2025-02-19</td>
            </tr>

            <tr className="table-data">
              <td>Putter game</td>
              <td>+4</td>
              <td>164</td>
              <td>2025-02-21</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Progress;
