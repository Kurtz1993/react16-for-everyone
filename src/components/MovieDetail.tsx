import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

const POSTER_PATH = "https://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

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
    const { movie } = this.state;

    return (
      <div className="movie__detail">
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
