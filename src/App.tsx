import * as React from 'react';

import Movie from '@app/components/Movie';
import './App.css';
import logo from './logo.svg';

const movies = [
  {
    id: 1,
    title: 'Star Wars',
  },
  {
    id: 2,
    title: 'Spider Man',
  },
  {
    id: 3,
    title: '36th Chamber of Shaolin',
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
