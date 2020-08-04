import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMoreButton} from './show-more-button.jsx';
import {LIMIT_FILMS_COUNT, films} from '../../data.js';

it(`Should render ShowMoreButton component`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          films={films}
          showedFilms={LIMIT_FILMS_COUNT}
          showMoreFilms={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
