import * as React from "react";
import { Link } from "react-router-dom";

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
    <Link to={`/movie/${movie.id}`}>
      <img
        src={`${POSTER_PATH}${movie.poster_path}`}
        alt={movie.title}
      />
    </Link>
  </div>
);

Movie.defaultProps = {};

export default Movie;
