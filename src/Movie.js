import React from "react";


class Movie extends React.Component {
  render() {
    return (
      <div className="movies" style={{border:'2px dotted blue'}}>
        <p className="movieTitle">Movie title : </p>
        <p className="movieYear">Release year : </p>
        <p className="moviePlot">Plot : </p>
        <img src="" alt="moviePoster" />
      </div>
    );
  }
}

export default Movie;
