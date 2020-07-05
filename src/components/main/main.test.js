import React from 'react';
import rerender from 'react-test-renderer';
import Main from './main.jsx';
import {promo, films} from '../../data.js';

it(`Shold Main render correctly`, () => {
  const tree = rerender
    .create(<Main
      promo={promo}
      films={films}
      onFilmClick={() => { }}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
