import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  state = {
    toggle: true,
  };

  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        {this.state.toggle && <p>This should show and hide</p>}
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}
export default App;
