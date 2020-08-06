import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import SignIn from './sign-in';
import {card} from '../../utils/test-data.js';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import {AuthorizationStatus, AVATAR_URL} from '../../const.js';

describe(`SignIn`, () => {
  const mockStore = configureStore([]);

  it(`Should SignIn render correctly when AuthError`, () => {
    const store = mockStore({
      [NameSpace.STATE]: {
        currentPage: `movie`,
        activeFilm: card,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationError: true,
        userInfo: {
          id: 0,
          email: ``,
          name: ``,
          avatarUrl: ``,
        }
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <SignIn
                onFormSubmit={() => {}}
                clearAuthError={() => {}}
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

  it(`Should render correctly when no AuthError`, () => {
    const store = mockStore({
      [NameSpace.STATE]: {
        currentPage: `movie`,
        activeFilm: card,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationError: false,
      },
      userInfo: {
        id: 1,
        email: `ivan@dmail.ru`,
        name: `Ivan`,
        avatarUrl: AVATAR_URL,
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <SignIn
                onFormSubmit={() => {}}
                clearAuthError={() => {}}
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
