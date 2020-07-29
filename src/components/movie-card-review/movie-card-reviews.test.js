import React from 'react';
import renderer from 'react-test-renderer';
import {film} from '../../data.js';
import MovieCardReviews from './movie-card-reviews.jsx';

describe(`render MovieCardReviews`, () => {
  it(`should MovieCardReviews render correctly`, () => {
    const tree = renderer.create(
        <MovieCardReviews
          film={film}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

