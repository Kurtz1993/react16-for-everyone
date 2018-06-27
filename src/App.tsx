import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  state = {
    input: 'Hello'
  };
  inputRef = React.createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);
  }

  updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  }

  submit = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
        </header>

        <input
          type="text"
          onChange={this.updateInput}
          value={this.state.input}
        />
        <input type="text" ref={this.inputRef} />
        <button onClick={this.submit}>Show Value</button>
      </div>
    );
  }
}

export default App;
