import * as React from 'react';

export interface MovieProps {
  movie: {
    id: number;
    title: string;
  };
}

class Movie extends React.Component<MovieProps> {
  render() {
    return <div className="movie">{this.props.movie.title}</div>;
  }
}

export default Movie;
