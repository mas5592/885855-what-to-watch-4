import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviePage from './movie-page';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {films, card} from '../../test-data';
import {adaptFilm, adaptFilms} from '../../adapters/film';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AVATAR_URL, AuthorizationStatus} from '../../const.js';
import {noop} from '../../utils';

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
          email: `ivanov@dmail.ru`,
          name: `Ivan`,
          avatarURL: AVATAR_URL,
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
                renderMovieNavTabs={noop}
                activeTab={``}
                loadFilmInformation={noop}
                routeProps={{match: {params: {id: 123456}, isExact: true, path: ``, url: ``}}}
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


