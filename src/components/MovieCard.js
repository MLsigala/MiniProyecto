/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../img/movie.png';

export function MovieCard({ movie }) {
  const item = movie.show;
  let imagen = placeholder;

  if (item.image != null) {
    imagen = item.image.medium;
  }

  return (
    <div className="col-3">
      <Link to={`/serie/${item.id}`}>
        <div className="card mb-4 border border-success">
          <div className="card-body text-center">
            <img width={250} height={350} alt={item.name} src={imagen} />
          </div>
          <div className="card-footer text-center">{item.name}</div>
        </div>
      </Link>
    </div>
  );
}
