import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/moviesActions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Pagination from "./Pagination";

class MoviesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc"));
  }

  render() {
    const { error, loading, movies } = this.props;
    const url = "http://image.tmdb.org/t/p/w342";
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="moviesList">
          {movies.results.map(product => (
            <div key={product.id} className="movieListElement">
              <Link className="text-link" to={`/details/${product.id}`}>
                <div>
                  <div>{product.original_title}</div>
                  <div>{product.release_date.substr(0, 4)}</div>
                  <div><img src={"https://image.tmdb.org/t/p/w342/" + product.poster_path} alt={`/${product.original_title}`}></img></div>
                </div>
              </Link>
            </div>
          )
          )}

        </div>
        <div>
          <Pagination />
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error
});

export default connect(mapStateToProps)(MoviesList);