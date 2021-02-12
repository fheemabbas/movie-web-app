import axios from "axios";

const API_KEY = "c48fd0cac928ed6da869366c5b004d56";
export const getLatestMovie = () => (dispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`)
    .then((result) => {
      dispatch({
        type: "GET_LATEST_MOVIE",
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
// export const getoneCommunityAmbassdor = (id) => (dispatch) => {
//   dispatch(setLoading())
//   let url = `/api/communityambassador/getone`
//   if (id) {
//     url = `/api/communityambassador/getone?id=${id}`
//   }
//   axios
//     .get(url)
//     .then((result) => {
//       dispatch({
//         type: GET_ONE_LIST_AMBASSDOR,
//         payload: result.data,
//       })
//     })
//     .catch((err) => {
//       dispatch({
//         type: LIST_ERROR,
//         payload: err && err.response ? err.response.data : '',
//       })
//     })
// }
