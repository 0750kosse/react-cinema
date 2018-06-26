import React from 'react';
import Movie from './Movie';


class MoviesList extends React.Component{
  render(){
    return (
      <div>
         <main className="moviesSection" style={{border:'2px solid purple'}}> Latest movies...</main>
         <Movie />
      </div>
    );
  }
}

export default MoviesList;