import React, { Component } from 'react';
import Router from 'Components/Router';
import GlobalStyles from './GlobalStyles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router />
      </>
    );
  }
}

export default App;
