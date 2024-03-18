
import './App.css';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Table from "./components/Table/Table";
import Missing from './components/Missing/Missing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import words from "./data/words";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Table words={words} />} />
          <Route path="/table" element={<Table words={words} />} />
          <Route path="/game" element={<WordCarousel words={words} />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
