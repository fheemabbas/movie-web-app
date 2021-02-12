import axios from "axios";

const API_KEY = "c48fd0cac928ed6da869366c5b004d56";
export const getLatestMovie = () => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`)
    .then((result) => {
      dispatch({
        type: "GET_LATEST_MOVIE",
        payload: result,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LIST_ERROR",
        payload: err,
      });
    });
};
export const getUpcomingMovie = () => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
    .then((result) => {
      dispatch({
        type: "GET_UPCOMING_MOVIE",
        payload: result.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LIST_ERROR",
        payload: err,
      });
    });
};
export const getNowPlayingMovie = () => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    .then((result) => {
      dispatch({
        type: "GET_NOW_PLAYING_MOVIE",
        payload: result.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LIST_ERROR",
        payload: err,
      });
    });
};
export const getOneMovie = (id) => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then((result) => {
      dispatch({
        type: "GET_ONE_MOVIE",
        payload: result,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LIST_ERROR",
        payload: err,
      });
    });
};
export const searchMovie = (search) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    )
    .then((result) => {
      dispatch({
        type: "GET_SEARCH_MOVIE",
        payload: result,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LIST_ERROR",
        payload: err,
      });
    });
};
