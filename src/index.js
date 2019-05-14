// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// Create a class-based React component
class App extends React.Component {
  constructor(props) {
    super(props);
    // This is the only time we do direct assignment to 'this.state'
    this.state = { latitude: null, errorMessage: '' };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // 'setState()' has to be used to update 'state'
        this.setState({ latitude: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      },
    );
  }

  componentDidMount() {
    console.log('My component was rendered to the screen.');
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!');
  }

  // For every component (or class component) we create, we have to define a render() method
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }
    return <div>Loading...</div>;
  }
}

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
