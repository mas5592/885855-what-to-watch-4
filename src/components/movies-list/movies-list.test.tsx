import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviesList from './movies-list';
import history from '../../history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {FILTER_ALL_GENRES} from '../../const.js';
import {films} from '../../test-data';
import {Router} from 'react-router-dom';


const mockStore = configureStore([]);

describe(`MoviesList`, () => {
  it(`Should render MoviesList component`, () => {
    const store = mockStore({
      films,
      activeGenre: FILTER_ALL_GENRES,
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MoviesList
                films={films}
                render={() => null}
              /></Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
