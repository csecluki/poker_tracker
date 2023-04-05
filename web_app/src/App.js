import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Dashboard from "./components/Dashboard";
import Accounts from "./components/account/Accounts";
import Sessions from "./components/poker_session/Sessions";
import EndSession from "./components/poker_session/end/EndSession";
import StartSession from "./components/poker_session/start/StartSession";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="menu">
        <Menu />
      </div>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/end" element={<EndSession />} />
          <Route path="/sessions/start" element={<StartSession />} />
        </Routes>
    </Router>
  );
}

export default App;
