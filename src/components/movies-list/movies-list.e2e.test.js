import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from './movies-list.jsx';
import {films} from '../../data.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should pass data to handler on click`, () => {
  const filmClickHandler = jest.fn();

  const moviesList = mount(
      <MoviesList
        films={films}
        onFilmCardClick={filmClickHandler}
        onFilmCardMouseOver={() => {}}
        onFilmCardMouseOut={() => {}}
        isPlaying={false}
      />
  );

  const card = moviesList
    .find(`article.small-movie-card.catalog__movies-card`)
    .first();

  card.simulate(`click`);

  expect(filmClickHandler.mock.calls.length).toBe(1);
  expect(filmClickHandler.mock.calls[0][0]).toMatchObject(films[0]);
});
