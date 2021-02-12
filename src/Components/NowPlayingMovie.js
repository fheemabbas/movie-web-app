import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNowPlayingMovie } from "./Action/Main";
function NowPlayng(props) {
  useEffect(() => {
    props.getNowPlayingMovie();
  }, []);
  console.log("data:", props.now_playing);
  return <div className="App">NowPlayng</div>;
}

const mapStateToProps = (state) => {
  return {
    now_playing: state.latest.now_playing,
  };
};
export default connect(mapStateToProps, { getNowPlayingMovie })(NowPlayng);
