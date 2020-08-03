import React from 'react';
import renderer from 'react-test-renderer';
import MovieNavTabs from './movie-nav-tabs.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/namespace.js';
import {film} from '../../data.js';

it(`Should render MovieNavTabs component`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    [Namespace.DATA]: {
      promo: film
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieNavTabs film={film} />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
