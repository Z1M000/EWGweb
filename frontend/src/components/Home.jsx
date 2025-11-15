import Roadmap from './Roadmap';
import Border from './Border';
import Progress from './Progress';
import AddActivity from './AddActivity';
import Comments from './Comments';
import More from './More';
import Footer from './Footer';
import '../component_styles/Home.css'
import { useState } from "react";

function Home() {
    const [activities, setActivities] = useState([]);

    const handleAddActivity = (newActivity) => {
        setActivities(prev => [...prev, newActivity]);
    };

  return (
    <div className="page-container">
      <Roadmap />
      <Border />
      <div className="page-container">
        <Progress activities={activities} />
        <AddActivity onAddActivity={handleAddActivity} />
        <Comments />
        <More />
        <Footer/>
      </div>
    </div>
  );
}

export default Home;