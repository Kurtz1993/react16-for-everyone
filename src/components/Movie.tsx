import * as React from 'react';

export interface MovieProps {
  movie: {
    id: number;
    title: string;
  };
  desc: string;
}

class Movie extends React.Component<MovieProps> {
  static defaultProps: Partial<MovieProps> = {
    desc: 'Currently not available',
  };

  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Movie;
