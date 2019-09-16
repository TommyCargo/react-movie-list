import React from "react";
import { fetchMovies } from "../actions/moviesActions";
import { connect } from "react-redux";

function Pagination({page, pages, dispatch}) {
    return (
      <div className="pagination">
        Page {page} of {pages}
        {(page > 1) ? <button onClick={() => dispatch(fetchMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page - 1}`))}>Previous</button> : ''}
        {(page < pages) ? <button onClick={() => dispatch(fetchMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page + 1}`))}>Next</button> : ''}
      </div>
    )
  };

  const mapStateToProps = (state, ownProps) => ({
    page: state.movies.items.page,
    pages: state.movies.items.total_pages
  });
  
  
  export default connect(mapStateToProps)(Pagination);