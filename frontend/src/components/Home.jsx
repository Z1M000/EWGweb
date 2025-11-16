import Roadmap from "./Roadmap";
import Border from "./Border";
import Progress from "./Progress";
import AddActivity from "./AddActivity";
import Comments from "./Comments";
import More from "./More";
import Footer from "./Footer";
import "../component_styles/Home.css";
import { useState } from "react";

function Home({ user }) {
  const [reloadActivities, setReloadActivities] = useState(false);

  const isLoggedIn = !!user;
  const isCoach = user?.role === "coach";
  const isPlayer = user?.role === "player";

  function handleActivityAdded() {
    setReloadActivities((prev) => !prev);
  }

  return (
    <div className="page-container">
      <Roadmap />
      <Border />
      <Progress />

      {user?.role === "coach" && (
        <>
          <AddActivity />
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
