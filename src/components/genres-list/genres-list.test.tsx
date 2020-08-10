import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {GenresList} from './genres-list';
import {genres} from '../../test-data';
import {noop} from '../../utils';
import {FILTER_ALL_GENRES} from '../../const';

describe(`GenresList`, () => {
  it(`Should render GenresList component`, () => {
    const tree = renderer
      .create(
          <GenresList
            genres={genres}
            activeGenre={FILTER_ALL_GENRES}
            onGenreItemClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
