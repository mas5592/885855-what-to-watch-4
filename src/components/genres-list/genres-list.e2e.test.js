import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenresList} from './genres-list.jsx';
import {films, FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should call handler on genre link click`, () => {
  const changeGenreHandler = jest.fn();
  const filmClickHandler = jest.fn();
  const resetShowedFilmsAmountHandler = jest.fn();

  const genresList = mount(
      <GenresList
        films={films}
        genre={FILTER_ALL_GENRES}
        changeGenre={changeGenreHandler}
        onFilmCardClick={filmClickHandler}
        showedFilms={LIMIT_FILMS_COUNT}
        resetShowedFilmsAmount={resetShowedFilmsAmountHandler}
        filteredFilms={films}
      />
  );

  const genreLink = genresList.find(`a.catalog__genres-link`).first();

  genreLink.simulate(`click`);

  expect(changeGenreHandler.mock.calls.length).toBe(1);
  expect(changeGenreHandler.mock.calls[0][0]).toBe(FILTER_ALL_GENRES);
  expect(resetShowedFilmsAmountHandler.mock.calls.length).toBe(1);
});
