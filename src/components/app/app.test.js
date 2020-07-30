import React from 'react';
import rerender from 'react-test-renderer';
import App from './app';
import {promo, films, FILTER_ALL_GENRES} from '../../data.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    currentGenre: FILTER_ALL_GENRES,
    films,
  });

  const appComponent = rerender
    .create(
        <Provider store={store}>
          <App
            promo={promo}
            films={films}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(appComponent).toMatchSnapshot();
});

