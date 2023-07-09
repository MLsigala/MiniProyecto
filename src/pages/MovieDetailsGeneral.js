/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { get } from '../data/httpClient';
import { getMovieImg } from '../utils/getMovieImg';

export function MovieDetailsGeneral({ id }) {
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [imagenes, setImagenes] = useState({});

  // Datos generales.
  useEffect(() => {
    get(`/shows/${id}`).then((data) => {
      setMovie(data);
      setGeneros(data.genres);
      setImagenes(data.image);
    });
  }, [id]);

  const urlImg = getMovieImg(imagenes);
  return (
    <div className="row">
      <div className="col-4 mt-4">
        <div className="card border border-success">
          <div className="card-body text-center">
            <img width={200} height={350} alt={movie.name} src={urlImg} />
          </div>
        </div>
      </div>
      <div className="col-8 mt-4">
        <p>
          <strong> Titulo: </strong>
          {movie.name}
          {}
        </p>
        <p>
          <strong> Idioma: </strong>
          {movie.language}
        </p>

        <p>
          <strong> Estatus: </strong>
          {movie.Ended}
        </p>

        <p>
          <strong> Genero(s): </strong>
          {movie.Ended}
        </p>
        {generos.map((genero) => (
          <ul key={genero}>{genero}</ul>
        ))}

        <p>
          <strong> Resumen </strong>
          {movie.summary}
        </p>
      </div>
    </div>
  );
}
