import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const films = [
  {
    id: 1,
    title: `Aviator`,
    src: `aviator.jpg`
  },
  {
    id: 2,
    title: `The Grand Budapest Hotel`,
    src: `bg-the-grand-budapest-hotel.jpg`
  }
];


it(`MoviesList renders correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList
          films={films}
          onFilmTitleClick={() => { }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

