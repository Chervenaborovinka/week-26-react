
import './App.css';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Table from "./components/Table";
import words from "./data/words";
import { Home } from "./components/Home/Home";
import Missing from './components/Missing/Missing';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/table">Table</Link>
          <Link to="/game">WordCarousel</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="table/" element={<Table words={words} />} />
          <Route path="game/" element={<WordCarousel words={words} />} />
          <Route path="*" element={<Missing />} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
