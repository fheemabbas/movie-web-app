import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingMovie } from "./Action/Main";
function Upcoming(props) {
  useEffect(() => {
    props.getUpcomingMovie();
  }, []);
  console.log("data:", props.upcomimg);
  return <div className="App">Upcoming</div>;
}

const mapStateToProps = (state) => {
  return {
    upcomimg: state.latest.upcoming,
  };
};
export default connect(mapStateToProps, { getUpcomingMovie })(Upcoming);
