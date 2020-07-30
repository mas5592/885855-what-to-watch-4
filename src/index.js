import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {promo} from './data.js';
import films from './mocks/films.js';
import {reducer} from './reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={promo}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
