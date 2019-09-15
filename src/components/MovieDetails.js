import React from "react";
import { connect } from "react-redux";
import { fetchCredits } from "../actions/moviesActions";
import { fetchMovies } from "../actions/moviesActions";


class MovieDetails extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCredits(this.props.id));
    /*
   try {
       if (this.props.movies.results.length == 0) {
           this.props.dispatch(fetchMovies());
           console.log(fetchMovies);
           console.log(this.props.movies);
       }
       console.log(false);
       console.log(this.props.movies);
   } catch (e) {
   
   }
   this.props.dispatch(fetchMovies(`https://api.themoviedb.org/3/movie/${this.props.id}/credits?`));
  */
    
    
  }

  render() {
    const { error, loading, credits, movies, id } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="movie-details">
        <div>
          Movie Details id: {id}
        </div>
        <div>
          <h3>{movies.results[(movies.results.findIndex(x => x.id == id))].original_title}</h3>
        </div>
        <div>
          <h4>Cast: </h4>
        </div>
        {credits.cast.map(item => (

          <div key={item.cast_id} className="cast-list">
            <div>{item.name}</div>
          </div>

        )
        )}

        {/* 
        https://api.themoviedb.org/3/genre/movie/list?api_key=
        https://api.themoviedb.org/3/movie/474350?api_key=010101bd73f000479a48f9b9375dd25a
        */}

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies.items,
  credits: state.movies.credits,
  loading: state.movies.loading,
  error: state.movies.error,
  id: ownProps.match.params.id
});


export default connect(mapStateToProps)(MovieDetails);