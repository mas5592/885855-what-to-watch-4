import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import SignIn from './sign-in';
import {card} from '../../test-data';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus, AVATAR_URL} from '../../const.js';
import {noop} from '../../utils';

describe(`SignIn`, () => {
  const mockStore = configureStore([]);

  it(`Should render correctly when AuthError`, () => {
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
          avatarURL: ``,
        }
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <SignIn
                onFormSubmit={noop}
                clearAuthError={noop}
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
        email: `ivanov@dmail.ru`,
        name: `Ivan`,
        avatarURL: AVATAR_URL,
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <SignIn
                onFormSubmit={noop}
                clearAuthError={noop}
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
