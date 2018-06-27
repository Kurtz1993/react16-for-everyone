import * as React from "react";

export interface MovieProps {
  movie: {
    id: number;
    title: string;
  };
  desc: string;
}

const Movie: React.SFC<MovieProps> = props => (
  <div>
    <h3>{props.movie.title}</h3>
    <p>{props.desc}</p>
  </div>
);

Movie.defaultProps = {
  desc: "Currently not available"
};

export default Movie;
