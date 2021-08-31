import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [parallex, setParallex] = useState(0);
  const handleScroll = () => {
    setParallex(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="parallex-effect">
        <div className="landscape"></div>
        <div className="title" style={{ marginTop: `${parallex * 0.6}px` }}>
          trekk
        </div>
        <div
          className="sky"
          // style={{ transform: `marginBottom:${parallex * 0.5}px` }}
        ></div>
      </div>
    </div>
  );
}

export default App;
