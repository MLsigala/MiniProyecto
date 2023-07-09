/* eslint-disable react/prop-types */
import React from 'react';
import { ContextMovieCard } from '../components/ContextMovieCard';

export function LandingPage({ id }) {
  return (
    <div>
      <ContextMovieCard id={id} />
    </div>
  );
}
