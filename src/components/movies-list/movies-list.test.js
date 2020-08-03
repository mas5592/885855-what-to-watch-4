import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import {films} from '../../data.js';

it(`Should render MoviesList component`, () => {
  const tree = renderer
    .create(
        <MoviesList
          films={films}
          onFilmCardClick={() => {}}
          onFilmCardMouseOver={() => {}}
          onFilmCardMouseOut={() => {}}
          isPlaying={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
