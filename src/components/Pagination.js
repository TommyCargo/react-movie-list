import React from "react";
import { fetchMovies } from "../actions/moviesActions";
import { connect } from "react-redux";

function Pagination({page}, {pages}) {
    return (
      <div className="pagination">
        Page {page} of {pages}
        {/*
        <button onClick={() => this.props.dispatch(fetchMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page + 1}`))}>NExt</button>
        */}
      </div>
    )
  };

  const mapStateToProps = (state, ownProps) => ({
    page: state.movies.items.page,
    pages: state.movies.items.total_pages
  });
  
  
  export default connect(mapStateToProps)(Pagination);