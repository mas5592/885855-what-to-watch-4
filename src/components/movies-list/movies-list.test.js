import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import history from '../../history.js';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {FILTER_ALL_GENRES} from '../../const.js';
import {films} from '../../utils/test-data.js';

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
                onFilmClick={() => {}}
                handleMovieCardHover={() => {}}
                render={() => {}}
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
