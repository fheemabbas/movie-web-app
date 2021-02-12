import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLatestMovie } from "./Action/Main";
import MovieCard from "./MovieCard";
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
function Latest(props) {
  useEffect(() => {
    props.getLatestMovie();
  }, []);

  const arr = [props.latest.data];
  return (
    <div style={styles.container}>
      {/* Rendering Latest */}
      {props.latest.data &&
        arr.map((u, i) => {
          return <MovieCard data={u} key={i} />;
        })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    latest: state.latest.latest_movie,
  };
};
export default connect(mapStateToProps, { getLatestMovie })(Latest);
