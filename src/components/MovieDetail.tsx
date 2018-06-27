import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import { Poster } from "@app/components/Movie";

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
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div<{ backdrop: string }>`
  position: relative;
  padding-top: 50vh;
  background: url(${p => p.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
