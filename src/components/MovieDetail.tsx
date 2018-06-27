import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

class MovieDetail extends React.Component<RouteComponentProps<any>> {
  state = {
    movie: {} as any
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=0d87075c2ae3f49df32c7eab2a4d0375&language=en-US`
      );
      const movie = await res.json();
      this.setState({ movie });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className="movie__detail">
        <h1>{this.state.movie.title}</h1>
        <h3>{this.state.movie.release_date}</h3>
        <p>{this.state.movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
