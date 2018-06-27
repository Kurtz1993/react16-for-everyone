import * as React from "react";

export interface MovieProps {
  movie: {
    id: number;
    title: string;
  };
  desc: string;
}

const Movie: React.SFC<MovieProps> = ({ movie, desc }) => (
  <div>
    <h3>{movie.title}</h3>
    <p>{desc}</p>
  </div>
);

Movie.defaultProps = {
  desc: "Currently not available"
};

export default Movie;
