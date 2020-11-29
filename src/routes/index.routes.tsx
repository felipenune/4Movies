import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MoviesProvider } from '../hooks/Movies';

import Home from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';

const Routes: React.FC = () => (
  <BrowserRouter>
    <MoviesProvider>
      <Route exact path="/" component={Home} />
      <Route exact path="/info" component={MovieInfo} />
    </MoviesProvider>
  </BrowserRouter>
);

export default Routes;
