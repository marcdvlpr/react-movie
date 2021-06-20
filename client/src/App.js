import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './globalStyle';
import Header from './containers/Header';
import Home from './containers/Home';
import Movie from './containers/Movie';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Home path='/' />
        <Movie path='/movie/:movieID/*' />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </>
  )
};

export default App;
