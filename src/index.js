import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {FILMS_TITLE, promo} from './data.js';

ReactDOM.render(
    <App
      promo = {promo}
      filmsTitle = {FILMS_TITLE}
    />,
    document.getElementById(`root`)
);
