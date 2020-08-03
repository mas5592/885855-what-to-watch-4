import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list.jsx';
import {films, FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';

it(`Should render GenresList component`, () => {
  const tree = renderer
    .create(
        <GenresList
          films={films}
          genre={FILTER_ALL_GENRES}
          changeGenre={() => {}}
          onFilmCardClick={() => {}}
          showedFilms={LIMIT_FILMS_COUNT}
          resetShowedFilmsAmount={() => {}}
          filteredFilms={films}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
