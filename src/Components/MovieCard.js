import React from "react";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router-dom";
const styles = {
  rating: { display: "flex", justifyContent: "center", zIndex: 0 },
  imageContainer: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "100px",
    width: "100px",
    margin: "0 auto",
  },
  image: { height: "100%", width: "100%", borderRadius: "50px" },
  title: {
    display: "flex",
    justifyContent: "center",
    lineHeight: "1.5em",
    overflow: "hidden",
    // height: "3em",
    padding: "10px 0px",
    fontSize: "16px",
    fontWeight: 600,
  },
  container: {
    marginTop: "0px",
    margin: "10px",
    width: "15rem",
    border: "1px solid #efefef",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
    padding: "20px",
    borderRadius: "5px",
  },
};
function MovieCard(props) {
  const { data } = props;
  let history = useHistory();
  const Rating = {
    size: 17,
    count: 10,
    isHalf: false,
    value: data.vote_average,
    color: "#efefef",
    activeColor: "#f5d04b",
    edit: false,
    isHalf: true,
  };
  return (
    <>
      {/* Movie Card */}
      <div
        className="card"
        style={styles.container}
        onClick={() => history.push(`/movie/${data.id}`)}
      >
        <div
        // style={styles.imageContainer}
        >
          <img
            src={
              `https://image.tmdb.org/t/p/w500${data.backdrop_path}` ||
              `https://wlkgsyeh6p-flywheel.netdna-ssl.com/wp-content/uploads/2013/07/Film-stock-image.gif`
            }
            className="card-img-top"
            alt={data.title}
            // style={styles.image}
          />
        </div>
        <div className="card-body">
          {data.vote_average && (
            <div className="card-text" style={styles.rating}>
              <ReactStars {...Rating} />
            </div>
          )}
          {data.vote_average && (
            <div className="card-text" style={styles.rating}>
              <h5>{data.vote_average} Out of 10</h5>
            </div>
          )}
          <div className="card-title" style={styles.title}>
            {data.title}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
