import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import MovieCardHero from './movie-card-hero';
import history from '../../history';
import NameSpace from '../../reducer/name-space';
import {card} from '../../utils/test-data.js';
import {AVATAR_URL, AuthorizationStatus} from '../../const.js';

describe(`MovieCardHero`, () => {
  const mockStore = configureStore([]);

  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.STATE]: {
        activeFilm: card,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          id: 1,
          email: `ivan@dmail.ru`,
          name: `Ivan`,
          avatarUrl: AVATAR_URL,
        }
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MovieCardHero
                activeFilm={card}
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
