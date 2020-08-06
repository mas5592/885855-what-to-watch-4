import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {films, card} from '../../utils/test-data.js';
import {adaptFilm, adaptFilms} from '../../adapters/film.js';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AVATAR_URL, AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

describe(`MoviePage`, () => {
  it(`Should render MoviePage component`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: adaptFilms(films)
      },
      [NameSpace.STATE]: {
        activeFilm: adaptFilm(card)
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          id: 1,
          email: `ivan@dmail.ru`,
          name: `Ivan`,
          avatarUrl: AVATAR_URL,
        },
      },
    });

    store.dispatch = jest.fn();

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MoviePage
                activeFilm={adaptFilm(card)}
                renderMovieNavTabs={() => {}}
                activeTab={``}
                loadFilmInformation={() => {}}
                routeProps={{match: {params: {id: 167456}, isExact: true, path: ``, url: ``}}}
              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


