/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { get } from '../data/httpClient';
import { GetCastImg } from './GetCastImg';

export function MovieDetailsCast({ id }) {
  const [cast, setCast] = useState([]);
  // Cast. URL: /shows/:id/cast
  useEffect(() => {
    get(`/shows/${id}/cast`).then((data) => {
      setCast(data);
    });
  }, [id]);

  return (
    <div className="row pt-2 pb-4">
      { cast.map((person) => (
        <div className="col-3">
          <div className="card mb-4 border border-success">
            <div className="card-body text-center">
              <GetCastImg person={person.person} />
            </div>
            <div className="card-footer text-center border-top border-success">
              Nombre:
              {' '}
              {person.person.name}
            </div>
          </div>
          <div />
        </div>
      ))}
    </div>
  );
}
