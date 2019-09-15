import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_CREDITS_BEGIN,
  FETCH_CREDITS_SUCCESS,
  FETCH_CREDITS_FAILURE
} from '../actions/moviesActions';

const initialState = {
  items: {
    results: [],
    page: 1,
    total_pages: 1
  },
  credits: {
    cast: []
  },
  loading: false,
  error: null
};



export default function moviesListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:

      return {
        ...state,
        loading: true,
          error: null
      };

    case FETCH_MOVIES_SUCCESS:

      return {
        ...state,
        loading: false,
          items: action.payload.movies
      };

    case FETCH_MOVIES_FAILURE:

      return {
        ...state,
        loading: false,
          error: action.payload.error,
          items: []
      };

    case FETCH_CREDITS_BEGIN:

      return {
        ...state,
        loading: true,
          error: null
      };

    case FETCH_CREDITS_SUCCESS:

      return {
        ...state,
        loading: false,
        credits: action.payload.credits
      };

    case FETCH_CREDITS_FAILURE:

      return {
        ...state,
        loading: false,
          error: action.payload.error,
          credits: []
      };

    default:

      return state;
  }
}