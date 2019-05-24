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

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  // For every component (or class component) we create, we have to define a render() method
  render() {
    return <div>{this.renderContent()}</div>;
    /* The <div> just above could be assigned a className or property and that would be
    the common element or property of whatever is returned from renderContent(). The logic is
    to avoid any conditionals in render() function and then we won't have multiple return
    statements and just in case we have to apply a common element or property to all of them
    then we have to assign that element manually to each of them unless we take all that
    logic/conditionals and move them to a separate function and whatever is returned from that
    function is already assigned a common element or property by render() function.
    */
  }
}

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
