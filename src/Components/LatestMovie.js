import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLatestMovie } from "./Action/Main";
function Latest(props) {
  useEffect(() => {
    props.getLatestMovie();
  }, []);
  console.log("data:", props.latest);
  return <div className="App">Latest</div>;
}
const mapStateToProps = (state) => {
  return {
    latest: state.latest.latest_movie,
  };
};
export default connect(mapStateToProps, { getLatestMovie })(Latest);
