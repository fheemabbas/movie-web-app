import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NowPlaying from "./Components/NowPlayingMovie";
import Upcomimg from "./Components/UpcomingMovie";
import Latest from "./Components/LatestMovie";
import MovieDetail from "./Components/MovieDetails";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/latest" exact render={(props) => <Latest />} />
        <Route path="/upcoming" exact render={(props) => <Upcomimg />} />
        <Route path="/now-playing" exact render={(props) => <NowPlaying />} />
        <Route path="/movie/:id" exact render={(props) => <MovieDetail />} />
        <Redirect to="/now-playing" />
      </Switch>
    </div>
  );
}

export default App;
