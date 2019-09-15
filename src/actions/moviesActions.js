import axios from 'axios';

export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_CREDITS_BEGIN = 'FETCH_CREDITS_BEGIN';
export const FETCH_CREDITS_SUCCESS = 'FETCH_CREDITS_SUCCESS';
export const FETCH_CREDITS_FAILURE = 'FETCH_CREDITS_FAILURE';

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export function fetchMovies() {
  return dispatch => {
    dispatch(fetchMoviesBegin());
    return axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=010101bd73f000479a48f9b9375dd25a")
      .then(res => {
        dispatch(fetchMoviesSuccess(res.data));
        return res.data;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}



export const fetchCredisBegin = () => ({
  type: FETCH_CREDITS_BEGIN
});

export const fetchCredisSuccess = credits => ({
  type: FETCH_CREDITS_SUCCESS,
  payload: { credits }
});

export const fetchCredisFailure = error => ({
  type: FETCH_CREDITS_FAILURE,
  payload: { error }
});

export function fetchCredits(id) {
  return dispatch => {
    dispatch(fetchCredisBegin());
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=010101bd73f000479a48f9b9375dd25a`)
      .then(res => {
        dispatch(fetchCredisSuccess(res.data));
        return res.data;
      })
      .catch(error => dispatch(fetchCredisFailure(error)));
  };
}