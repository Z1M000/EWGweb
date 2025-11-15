import logo from './logo.svg';
import Roadmap from './components/Roadmap';
import './App.css';
import Progress from './components/Progress';
import More from './components/More';
import Header from './components/Header';
import Border from './components/Border';
import Comments from './components/Comments';
import Footer from './components/Footer';
import AddActivity from './components/AddActivity';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login';

function App() {
  return (
     <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
