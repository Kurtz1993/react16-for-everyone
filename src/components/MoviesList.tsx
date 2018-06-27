import * as React from "react";
import styled from 'styled-components';

import Movie from "@app/components/Movie";

class MoviesList extends React.PureComponent {
  state = {
    movies: [] as any[]
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=0d87075c2ae3f49df32c7eab2a4d0375&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await res.json();
      this.setState({ movies: movies.results });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map((movie: any) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;