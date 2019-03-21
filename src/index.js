// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// Create a class-based React component
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err),
    );
    return <div>Latitude: </div>;
  }
}

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
