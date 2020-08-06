import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';
import {films} from '../../utils/test-data';

const Settings = {
  activeFilter: `Action`,
  genres: [`All genres`].concat(Array.from(new Set(films.map((film) => film.genre))))
};

describe(`GenresList`, () => {
  it(`Should render GenresList component`, () => {
    const tree = renderer
      .create(
          <GenresList
            genres={Settings.genres}
            currentActiveGenre={Settings.activeFilter}
            onGenreClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
