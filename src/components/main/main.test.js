import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {promo} from '../../data.js';

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

it(`Shold Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          promo={promo}
          films={films}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
