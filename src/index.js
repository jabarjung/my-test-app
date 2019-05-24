// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Create a class-based React component
class App extends React.Component {
  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    // 'setState()' has to be used to update 'state'
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  // For every component (or class component) we create, we have to define a render() method
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner message="Please accept location request" />;
  }
}

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
