import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main.jsx';
import {films, FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';
import Namespace from '../../reducer/namespace.js';

const mockStore = configureStore([]);

it(`Shold Main render correctly`, () => {
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
          <Main
            onFilmCardClick={() => {}}
            promo={films[0]}
            isVideoPlayerFull={false}
            onVisibilityChange={() => {}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
