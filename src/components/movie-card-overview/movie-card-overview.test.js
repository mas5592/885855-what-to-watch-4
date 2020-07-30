import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardOverview from './movie-card-overview.jsx';
import {film} from '../../data.js';

describe(`render MovieCardOverview`, () => {
  it(`should MovieCardOverview render correctly`, () => {
    const tree = renderer.create(
        <MovieCardOverview
          film={film}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
