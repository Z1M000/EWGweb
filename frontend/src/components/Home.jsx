import { useState } from "react";
import Roadmap from "./Roadmap";
import Border from "./Border";
import Progress from "./Progress";
import AddActivity from "./AddActivity";
import Comments from "./Comments";
import More from "./More";
import Footer from "./Footer";
import "../component_styles/Home.css";

function Home() {
  const [reloadActivities, setReloadActivities] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  function handleActivityAdded() {
    setReloadActivities(function (prev) {
      return !prev;
    });
  }

  function handleTotalPointsChange(tp) {
    setTotalPoints(tp);
  }

  return (
    <div className="page-container">
      <Roadmap totalPoints={totalPoints} />
      <Border />
      <div className="page-container">
        <Progress
          reload={reloadActivities}
          onTotalPointsChange={handleTotalPointsChange}
        />
        <AddActivity onActivityAdded={handleActivityAdded} />
        <Comments />
        <More />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
