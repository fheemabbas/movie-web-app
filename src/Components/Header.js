import React, { useState } from "react";
// import "./App.css";
// eslint-disable-next-line
import { searchMovie } from "./Action/Main";
import { connect } from "react-redux";
function Header(props) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/latest">
          MovieApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/now-playing">
                Now Playing
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/latest">
                Latest
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/upcoming">
                Upcoming
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                props.searchMovie(e.target.value);
              }}
            />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default connect(null, { searchMovie })(Header);
