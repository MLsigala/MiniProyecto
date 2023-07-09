/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { MovieDetails } from '../pages/MovieDetails';

export function MyRoutes({ id }) {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage id={id} />}
        />
        <Route exact path="/serie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
