/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { get } from '../data/httpClient';
import { MovieDetailsEpisodes } from './MovieDetailsEpisodes';

export function MovieDetailsSessons({ id }) {
  const [seasons, setSeasson] = useState([]);

  // Temporadas. URL: /shows/:id/seasons
  useEffect(() => {
    get(`/shows/${id}/seasons`).then((data) => {
      setSeasson(data);
    });
  }, [id]);
  return (
    <div className="row mt-4 pb-4">
      { seasons.map((season) => (
        <div key={season.id} className="text-center">
          Temporada:
          {' '}
          {season.number}
          {' '}
          {season.name}
          <hr />
          <MovieDetailsEpisodes id={season.id} />
        </div>
      ))}
    </div>
  );
}
