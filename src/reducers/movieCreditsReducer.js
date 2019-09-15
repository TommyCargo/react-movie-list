import {
  FETCH_CREDITS_BEGIN,
  FETCH_CREDITS_SUCCESS,
  FETCH_CREDITS_FAILURE
} from '../actions/moviesActions';

const initialState = {
  items: { cast: [] },
  loading: false,
  error: null
};



export default function movieCreditsReducer(state = initialState, action) {
  switch (action.type) {
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
        items: action.payload.credits
      };

    case FETCH_CREDITS_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:

      return state;
  }
}