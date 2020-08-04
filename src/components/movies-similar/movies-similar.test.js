import React from 'react';
import renderer from 'react-test-renderer';
import MoviesSimilar from './movies-similar.jsx';
import {film, films} from '../../data.js';

it(`Should render MoviesSimilar component`, () => {
  const tree = renderer
    .create(
        <MoviesSimilar films={films} film={film} onFilmCardClick={() => {}} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
