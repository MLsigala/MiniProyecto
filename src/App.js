/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './App.css';
import { MyRoutes } from './routers/routes';

function App() {
  const [search, setSearch] = useState('pirata');
  const [filtro, setFiltro] = useState('');

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const searcherClick = () => {
    setFiltro(search);
  };

  return (
    <div className="container">
      <div className="bg-dark bg-gradient text-white pr-4 mr-4">
        <header className="text-center mt-4 pt-5">
          <h1>Peliculas</h1>
        </header>
        <div className="row pb-4">
          <div className="col-9" />
          <div className="col-3">
            <div className="d-flex">
              <div className="form-group">
                <input className="form-control" type="text" onChange={searcher} />
              </div>
              <button type="button" className="btn btn-success" onClick={searcherClick}>
                Buscar
              </button>
            </div>
          </div>

        </div>
      </div>
      <br />
      <MyRoutes id={filtro} />
    </div>
  );
}

export default App;
