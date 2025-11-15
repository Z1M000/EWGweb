import '../component_styles/Progress.css'

function Progress({ activities }) {
  return (
    <div className = "outer-container">
      <div className = "middle-container">

          <div className='points-container'>
            <p className='point-value'> Progress </p>
        </div>

        <div className="table-container">
          <table className="progress-table">
            <thead>
              <tr className="table-headers">
                  <td>Actitivty</td>
                  <td>Points</td>
                  <td>Total After</td>
                  <td>Date</td>
                </tr>
                </thead>

            <tbody className='table-data'>
          {activities.map((a, index) => (
            <tr key={index}>
              <td>{a.activityName}</td>
              <td>{a.points}</td>
              <td>{a.totalAfter}</td>
              <td>{a.date}</td>
            </tr>
          ))}
        </tbody>


          </table>
        </div>

      </div>
    </div>
  );
}

export default Progress;