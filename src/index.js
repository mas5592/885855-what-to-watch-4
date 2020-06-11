import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const settings = {
  movieTitle: `The Grand Budapest Hotel`,
  movieGenre: `Drama`,
  movieYear: `2014`
};

ReactDOM.render(
    <App
      movieTitle={settings.movieTitle}
      movieGenre={settings.movieGenre}
      movieYear={settings.movieYear}
    />,
    document.getElementById(`root`)
);
