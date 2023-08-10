/** @format */

import "./App.css";
import SpellingBeeSolver from "./components/SpellingBeeSolver/SpellingBeeSolver.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <SpellingBeeSolver />
      </header>
    </div>
  );
}

export default App;
