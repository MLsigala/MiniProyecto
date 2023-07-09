/* eslint-disable react/prop-types */
import { React, useEffect, useState } from 'react';
import { get } from '../data/httpClient';
import { MovieCard } from './MovieCard';

export function ContextMovieCard({ id }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get(`/search/shows?q=${id}`).then((data) => {
      setMovies(data);
    });
  }, [id]);

  return (
    <div className="row">
      {movies.map((item) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
}
