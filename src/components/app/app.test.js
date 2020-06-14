import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {FILMS_TITLE, promo} from '../../data.js';

it(`Render App`, () => {
  const appComponent = renderer
    .create(
        <App
          promo = {promo}
          filmsTitle = {FILMS_TITLE}
        />
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
