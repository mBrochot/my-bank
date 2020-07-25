import React from "react";
import "./App.css";
import Accounts from "./components/Accounts";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Accounts />
      <footer>©mBrochot</footer>
    </div>
  );
}

export default App;
