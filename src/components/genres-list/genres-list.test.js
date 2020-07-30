import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list';
import {GENRES} from '../../mocks/genres.js';

it(`Render genres list`, () => {
  const genreSetCurrentHandler = jest.fn();
  const tree = renderer.create(
      <GenresList
        genresList={GENRES}
        currentGenre={GENRES[0]}
        setCurrentGenre={genreSetCurrentHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
