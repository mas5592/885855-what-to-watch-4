import React from 'react';
import rerender from 'react-test-renderer';
import MovieCard from '../movie-card/movie-card.jsx';
import {films} from '../../data.js';

it(`Should MovieCard render correctly`, () => {
  const tree = rerender
    .create(
        <MovieCard
          film={films[0]}
          onFilmClick={() => { }}
          films={films}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
