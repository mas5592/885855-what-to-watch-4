import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardDetails from './movie-card-details.jsx';
import {film} from '../../data.js';

it(`should MovieCardDetails render correctly`, () => {
  const tree = renderer.create(
      <MovieCardDetails
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
