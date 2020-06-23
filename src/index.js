import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {promo} from './data.js';
import films from './mocks/films.js';

ReactDOM.render(
    <App
      promo={promo}
      films={films}
    />,
    document.querySelector(`#root`)
);
