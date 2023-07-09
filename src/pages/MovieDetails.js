/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';
import { MovieDetailsSessons } from './MovieDetailsSessons';
import { MovieDetailsCast } from './MovieDetailsCast';
import { MovieDetailsGeneral } from './MovieDetailsGeneral';

export function MovieDetails() {
  const { id } = useParams();
  return (
    <div>
      <Tabs>
        <Tab className="border-top border-secondary" eventKey="show" title="Serie">
          <MovieDetailsGeneral id={id} />
        </Tab>
        <Tab className="border-top border-secondary" eventKey="sessons" title="Temporadas">
          <MovieDetailsSessons id={id} />
        </Tab>
        <Tab className="border-top border-secondary" eventKey="cast" title="Cast">
          <MovieDetailsCast id={id} />
        </Tab>
      </Tabs>
    </div>
  );
}
