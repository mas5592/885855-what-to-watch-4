import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';
import {film} from '../../data.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should pass data to handler on hover`, () => {
  const filmCardMouseOverHandler = jest.fn();
  const filmCardMouseOutHandler = jest.fn();

  const card = shallow(
      <MovieCard
        film={film}
        isPlaying={true}
        onFilmCardClick={() => {}}
        onFilmCardMouseOver={() => filmCardMouseOverHandler(film)}
        onFilmCardMouseOut={filmCardMouseOutHandler}
      />
  );

  card.simulate(`mouseover`);
  card.simulate(`mouseout`);

  expect(filmCardMouseOverHandler.mock.calls.length).toBe(1);
  expect(filmCardMouseOverHandler.mock.calls[0][0]).toMatchObject(film);
  expect(filmCardMouseOutHandler.mock.calls.length).toBe(1);
});
