import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {film} from '../../data.js';

it(`Should render MovieCard component`, () => {
  const tree = renderer
    .create(
        <MovieCard
          film={film}
          onFilmCardClick={() => {}}
          onFilmCardMouseOver={() => {}}
          onFilmCardMouseOut={() => {}}
          isPlaying={true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
