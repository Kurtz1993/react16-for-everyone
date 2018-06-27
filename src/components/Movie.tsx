import * as React from "react";

const POSTER_PATH = "https://image.tmdb.org/t/p/w154";

export interface MovieProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  };
}

const Movie: React.SFC<MovieProps> = ({ movie }) => (
  <div>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
  </div>
);

Movie.defaultProps = {
};

export default Movie;
