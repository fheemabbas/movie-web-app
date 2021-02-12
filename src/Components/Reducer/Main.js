const initialState = {
  error: null,
  latest_movie: [],
  upcoming: [],
  now_playing: [],
};

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
    default:
      return state;
  }
}
