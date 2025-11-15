import Roadmap from './Roadmap';
import Border from './Border';
import Progress from './Progress';
import AddActivity from './AddActivity';
import Comments from './Comments';
import More from './More';

function Home() {
  return (
    <div className="page-container">
      <Roadmap />
      <Border />
      <div className="page-container">
        <Progress />
        <AddActivity />
        <Comments />
        <More />
      </div>
    </div>
  );
}

export default Home;