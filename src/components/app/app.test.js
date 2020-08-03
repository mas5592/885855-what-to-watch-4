import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {films, FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/namespace.js';

const mockStore = configureStore([]);

it(`Should render App component`, () => {
  const store = mockStore({
    [Namespace.DATA]: {
      films,
      promo: films[0]
    },
    [Namespace.STATE]: {
      genre: FILTER_ALL_GENRES,
      showedFilms: LIMIT_FILMS_COUNT
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App loadComments={() => {}} />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
