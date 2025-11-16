import "../component_styles/More.css";

function More() {
  return (
    <div className="outer-container">
      <div className="middle-container">
        {/* ⭐ 加一个只在这个组件使用的 wrapper，保证不会影响别人 */}
        <div className="more-wrapper">
          <p className="point-value">Learn More</p>

          <ul className="info-list">
            <li className="game-summary">
              This site tracks the Emory Women’s Golf point system, where
              players earn points from practices, tournaments, and other team
              activities.
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                href="https://docs.google.com/document/d/1pz1OdZDN2u_cPtey3aIq00W0XO1I0jaTAiYnIDFseB8/edit?usp=sharing"
              >
                Click Here for the Point Game Rules
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                href="https://www.instagram.com/emorywgolf/"
              >
                Click Here for Our Instagram
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                href="https://emoryathletics.com/sports/womens-golf"
              >
                Click Here for Our Homepage
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default More;
