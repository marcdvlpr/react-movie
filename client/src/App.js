import React from 'react';
import { GlobalStyle } from './globalStyle';

import Header from './containers/Header';
import Home from './containers/Home';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  )
};

export default App;
