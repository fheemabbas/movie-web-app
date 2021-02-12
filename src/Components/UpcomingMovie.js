import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingMovie } from "./Action/Main";
import MovieCard from "./MovieCard";
// eslint-disable-next-line
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
function Upcoming(props) {
  useEffect(() => {
    props.getUpcomingMovie();
    // eslint-disable-next-line
  }, []);
  console.log("data:", props.upcomimg);
  return (
    <div style={styles.container}>
      {/* Rendering Latest */}
      {props.upcomimg &&
        props.upcomimg.results &&
        props.upcomimg.results.map((u, i) => {
          return <MovieCard data={u} key={u.id} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    upcomimg: state.latest.upcoming,
  };
};
export default connect(mapStateToProps, { getUpcomingMovie })(Upcoming);
