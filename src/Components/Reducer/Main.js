const initialState = {
  error: null,
  latest_movie: [],
  upcoming: [],
  now_playing: [],
  movie_data: [],
  search_movie_data: [],
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LIST_ERROR":
      return {
        ...state,
        error: {
          data: action.payload && action.payload.data,
        },
      };
    case "GET_LATEST_MOVIE":
      return {
        ...state,
        latest_movie: action.payload,
      };
    case "GET_UPCOMING_MOVIE":
      return {
        ...state,
        upcoming: action.payload,
      };
    case "GET_NOW_PLAYING_MOVIE":
      return {
        ...state,
        now_playing: action.payload,
      };
    case "GET_ONE_MOVIE":
      return {
        ...state,
        movie_data: action.payload,
      };
    case "GET_SEARCH_MOVIE":
      console.log("search :", action.payload);
      return {
        ...state,
        now_playing: action.payload.data,
      };
    default:
      return state;
  }
}
