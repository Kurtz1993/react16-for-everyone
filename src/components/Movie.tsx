import * as React from 'react';

export interface IMovieProps {
  movie: {
    id: number;
    title: string;
  };
}

class Movie extends React.Component<IMovieProps> {
  render() {
    return <div className="movie">{this.props.movie.title}</div>;
  }
}

export default Movie;
