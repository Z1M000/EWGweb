import '../component_styles/Progress.css'

function Progress() {
  return (
    <div className = "outer-container">
      <div className = "middle-container">

          <div className='points-container'>
            <p className='point-value'> Progress </p>
        </div>

        <div className="table-container">
          <table className="progress-table">
              <tr className="table-headers">
                  <td>Actitivty</td>
                  <td>Points</td>
                  <td>Total After</td>
                  <td>Date</td>
              </tr>

            {/* Made up data need to connect later */}
              <tr className='table-data'>
                <td>Team lift</td>
                <td>+6</td>
                <td>164</td>
                <td>2025-02-20</td>
              </tr>

              <tr className='table-data'>
                <td>Short game practice</td>
                <td>+8</td>
                <td>164</td>
                <td>2025-02-19</td>
              </tr>

              <tr className='table-data'>
                <td>Putter game</td>
                <td>+4</td>
                <td>164</td>
                <td>2025-02-21</td>
              </tr>

              <tr className='table-data'>
                <td>Team lift</td>
                <td>+6</td>
                <td>164</td>
                <td>2025-02-20</td>
              </tr>

              <tr className='table-data'>
                <td>Short game practice</td>
                <td>+8</td>
                <td>164</td>
                <td>2025-02-19</td>
              </tr>

              <tr className='table-data'>
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