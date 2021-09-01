import React, { useState } from "react";
import "./App.css";
import Task1 from "./components/TaskOne";
import Task2 from "./components/TaskTwo";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="app">
      {currentPage === 1 ? <Task1 /> : <Task2 />}
      <div className="pagination">
        <span
          onClick={() => setCurrentPage(1)}
          className={currentPage === 1 ? "active" : ""}
        >
          1
        </span>
        <span
          onClick={() => setCurrentPage(2)}
          className={currentPage === 2 ? "active" : ""}
        >
          2
        </span>
      </div>
    </div>
  );
}

export default App;
