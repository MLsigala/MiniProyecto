/* eslint-disable react/prop-types */
import React from 'react';
import placeholder from '../img/actor.png';

export function GetCastImg({ person }) {
  let path = placeholder;

  if (person.image !== null) {
    path = person.image.medium;
  }

  return (
    <div>
      <img width={200} height={350} alt="" src={path} />
    </div>
  );
}
