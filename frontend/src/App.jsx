import logo from './logo.svg';
import Roadmap from './components/Roadmap';
import './App.css';
import Progress from './components/Progress';
import More from './components/More';
import Header from './components/Header';
import Border from './components/Border';
import Comments from './components/Comments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="page-container">
          <Roadmap> </Roadmap>
      </div>

      <Border></Border>

      <div className="page-container">
        <Progress></Progress>
        <Comments></Comments>
        <More></More>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
