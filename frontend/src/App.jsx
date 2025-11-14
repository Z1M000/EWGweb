import logo from './logo.svg';
import Roadmap from './components/Roadmap';
import Intro from './components/Intro';
import './App.css';
import Progress from './components/Progress';
import More from './components/More';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Roadmap> </Roadmap>
      <Intro></Intro>
      <Progress></Progress>
      <More></More>
    </div>
  );
}

export default App;
