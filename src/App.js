import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NowPlaying from "./Components/NowPlayingMovie";
import Upcomimg from "./Components/UpcomingMovie";
import Latest from "./Components/LatestMovie";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/latest" exact render={(props) => <Latest />} />
        <Route path="/upcoming" exact render={(props) => <Upcomimg />} />
        <Route path="/now-playing" exact render={(props) => <NowPlaying />} />
        <Redirect to="/letest" />
      </Switch>
    </div>
  );
}

export default App;
