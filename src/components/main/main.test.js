import React from 'react';
import {Provider} from 'react-redux';
import rerender from 'react-test-renderer';
import Main from './main.jsx';
import {promo, films} from '../../data.js';
import configureStore from 'redux-mock-store';
import {FILTER_ALL_GENRES} from '../../data.js';

const mockStore = configureStore([]);

it(`Shold Main render correctly`, () => {
  const store = mockStore({
    currentGenre: FILTER_ALL_GENRES,
    films,
  });

  const tree = rerender
    .create(
        <Provider store={store}>
          <Main
            promo={promo}
            films={films}
            onFilmClick={() => { }}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
