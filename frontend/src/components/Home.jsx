import { useState } from "react";
import Roadmap from "./Roadmap";
import Border from "./Border";
import Progress from "./Progress";
import AddActivity from "./AddActivity";
import Comments from "./Comments";
import More from "./More";
import Footer from "./Footer";
import "../component_styles/Home.css";

function Home({ user }) {
  const [reloadActivities, setReloadActivities] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const isLoggedIn = !!user;
  const isCoach = user?.role === "coach";
  const isPlayer = user?.role === "player";

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
      <Progress
          reload={reloadActivities}
          onTotalPointsChange={handleTotalPointsChange}
        />

      {user?.role === "coach" && (
        <>
          <AddActivity onActivityAdded={handleActivityAdded} />
        </>
      )}

      {(user?.role === "player" || user?.role === "coach") && (
        <>
          <Comments />
        </>
      )}

      <More />
      <Footer />
    </div>
  );
}

export default Home;
