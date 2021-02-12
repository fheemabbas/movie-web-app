import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNowPlayingMovie } from "./Action/Main";
import MovieCard from "./MovieCard";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
function NowPlayng(props) {
  useEffect(() => {
    props.getNowPlayingMovie();
  }, []);
  console.log("data:", props.now_playing);
  return (
    <div style={styles.container}>
      {/* Rendering Latest */}
      {props.now_playing &&
        props.now_playing.results &&
        props.now_playing.results.map((u, i) => {
          return <MovieCard data={u} key={u.id} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    now_playing: state.latest.now_playing,
  };
};
export default connect(mapStateToProps, { getNowPlayingMovie })(NowPlayng);
