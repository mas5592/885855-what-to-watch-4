import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/namespace.js';
import {Provider} from 'react-redux';
import {films, FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';

it(`Should render MoviePage component`, () => {
  const mockStore = configureStore([]);

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
          <MoviePage
            film={films[0]}
            onFilmCardClick={() => {}}
            isVideoPlayerFull={false}
            onVisibilityChange={() => {}}
            films={films}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
