import React from 'react';
import rerender from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import {films} from '../../data.js';

it(`MoviesList renders correctly`, () => {
  const tree = rerender
    .create(<MoviesList
      films={films}
      onFilmClick={() => { }}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

