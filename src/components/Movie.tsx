import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

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
      <Overdrive id={movie.id}>
        <Poster
          id={movie.id.toString()}
          src={`${POSTER_PATH}${movie.poster_path}`}
          alt={movie.title}
        />
      </Overdrive>
    </Link>
  </div>
);

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;

export default Movie;
