import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOneMovie } from "./Action/Main";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "../App.css";
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
function MovieDetail(props) {
  let { id } = useParams();
  const { data } = props.data;
  useEffect(() => {
    props.getOneMovie(id);
  }, []);

  console.log("ID:", id);
  console.log("ID:", props.data.data);
  const Rating = {
    size: 30,
    count: 10,
    isHalf: false,
    value: data && data.vote_average,
    color: "#efefef",
    activeColor: "#f5d04b",
    edit: false,
    isHalf: true,
  };
  return (
    <div className="app">
      {data && (
        <>
          <div className="banner">
            <img
              src={
                `https://image.tmdb.org/t/p/w500${data.backdrop_path}` ||
                `https://wlkgsyeh6p-flywheel.netdna-ssl.com/wp-content/uploads/2013/07/Film-stock-image.gif`
              }
              alt={data.title}
              width="100%"
              height="50%"
              className="banner"
            />
          </div>
          <div className="eventmaintitle fontSize">
            Movie Name :{data.title}
          </div>
          <div className="eventmaintitle fontSize">About {data.title}</div>
          <p className="overview">{data.overview}</p>
          <div className="fontSize">
            Original Language :{" "}
            <span>
              {data.spoken_languages.map((name) => (
                <span>{name.name}</span>
              ))}
            </span>
          </div>
          <div className="fontSize">
            <div> status : {data.status}</div>
            <div> Release Date : {data.release_date}</div>
          </div>
          <div className="fontSize">
            Rating :<ReactStars {...Rating} />
            <h5>{data.vote_average} Out of 10</h5>
          </div>
          <div className="fontSize">
            Production by :{" "}
            <div>
              {data.production_companies.map((name) => (
                <span style={{ fontWeight: 600 }}>{name.name},</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.latest.movie_data,
  };
};
export default connect(mapStateToProps, { getOneMovie })(MovieDetail);
