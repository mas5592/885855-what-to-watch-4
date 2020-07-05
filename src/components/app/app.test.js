import React from 'react';
import rerender from 'react-test-renderer';
import App from './app';
import {promo, films} from '../../data.js';

it(`Render App`, () => {
  const appComponent = rerender
    .create(<App
      promo={promo}
      films={films}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(appComponent).toMatchSnapshot();
});
