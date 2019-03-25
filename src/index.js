// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// Create a class-based React component
class App extends React.Component {
  constructor(props) {
    super(props);
    // This is the only time we do direct assignment to 'this.state'
    this.state = { latitude: null };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // 'setState()' has to be used to update 'state'
        this.setState({ latitude: position.coords.latitude });
      },
      err => console.log(err),
    );
  }
  // For every component (or class component) we create, we have to define a render() method
  render() {
    return <div>Latitude: {this.state.latitude}</div>;
  }
}

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
