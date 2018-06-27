import * as React from 'react';

import './App.css';
import logo from './logo.svg';

import Movie from '@app/components/Movie';

class App extends React.Component {
  state = {
    movies: [{}]
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=0d87075c2ae3f49df32c7eab2a4d0375&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );
      const movies = await res.json();
      this.setState({ movies: movies.results });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map((movie: any) => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
      </div>
    );
  }
}

export default App;
