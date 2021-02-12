import React from "react";
import ReactStars from "react-rating-stars-component";
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
    lineHeight: "1.5em",
    overflow: "hidden",
    // height: "3em",
    padding: "10px 0px",
    fontSize: "18px",
    fontWeight: 600,
  },
  container: {
    marginTop: "0px",
    margin: "10px",
    width: "20rem",
    border: "1px solid #efefef",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
    padding: "20px",
    borderRadius: "5px",
  },
};
function MovieCard(props) {
  const { data } = props;
  return (
    <>
      {/* Movie Card */}
      <div className="card" style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={data.backdrop_path}
            className="card-img-top"
            alt={data.title}
            style={styles.image}
          />
        </div>
        <div className="card-body">
          <div className="card-title" style={styles.title}>
            {data.title}
          </div>

          <div className="card-text" style={styles.rating}>
            {/* <ReactStars {...Rating} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
