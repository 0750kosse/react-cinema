import React from "react";
import Header from "./Header";
import MoviesList from "./MoviesList";
import Movie from "./Movie";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Search />
        <MoviesList />
      </div>
    );
  }
}

export default App;
