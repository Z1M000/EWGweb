import Roadmap from "./Roadmap";
import Border from "./Border";
import Progress from "./Progress";
import AddActivity from "./AddActivity";
import Comments from "./Comments";
import More from "./More";
import Footer from "./Footer";
import "../component_styles/Home.css";
import { useState } from "react";

function Home() {
  const [reloadActivities, setReloadActivities] = useState(false);

  function handleActivityAdded() {
    // 每次 Add 成功之后，翻转一下布尔值
    setReloadActivities((prev) => !prev);
  }

  return (
    <div className="page-container">
      <Roadmap />
      <Border />
      <div className="page-container">
        <Progress reload={reloadActivities} />
        <AddActivity onActivityAdded={handleActivityAdded} />
        <Comments />
        <More />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
