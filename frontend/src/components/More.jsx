import '../component_styles/More.css';

function More() {
  return (
    <div className = "outer-container">
      <div className = "middle-container information">

            <p className='point-value'> Learn More </p>
            <p className="game-summary">This site tracks the Emory Women’s Golf point system - players earn points from training and team actives. Milestones unlock rewards (prize) and a season goal </p>
            <a target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              href="https://docs.google.com/document/d/1pz1OdZDN2u_cPtey3aIq00W0XO1I0jaTAiYnIDFseB8/edit?usp=sharing">Click Here for Rules</a>


      </div>
    </div>
  );
}

export default More;