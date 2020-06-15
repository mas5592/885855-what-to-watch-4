import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {FILMS_TITLE, promo} from '../../data.js';

it(`Shold Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promo={promo}
      filmsTitle = {FILMS_TITLE}
      onTitleClickHandler={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
