/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { get } from '../data/httpClient';

export function MovieDetailsEpisodes({ id }) {
  const [episodes, setEpisodes] = useState([]);

  // Temporadas episodios. URL: /seasons/:id/episode
  useEffect(() => {
    get(`/seasons/${id}/episodes`).then((data) => {
      setEpisodes(data);
    });
  }, [id]);
  return (
    <div>
      { episodes.map((episode) => (
        <ul key={episode.id}>
          Capitulo:
          {' '}
          {episode.number}
          {' '}
          {episode.name}
        </ul>
      ))}
    </div>
  );
}
