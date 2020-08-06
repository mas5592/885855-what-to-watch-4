import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {card, films, filmReviews} from '../../utils/test-data.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {FILTER_ALL_GENRES, AVATAR_URL, AuthorizationStatus, PageNames} from '../../const.js';

const mockStore = configureStore([]);

describe(`App`, () => {
  it(`Should render App component`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        card,
        films,
        filmReviews,
        isLoading: false,
        isLoadError: false,
      },
      [NameSpace.STATE]: {
        activeGenre: FILTER_ALL_GENRES,
        currentPage: PageNames.MAIN,
        activeFilm: card,
        isMainPage: true,
        isVideoPlayer: false,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        isAuthorizationError: false,
        isAuthorizationProgress: true,
        userInfo: {
          id: 1,
          email: `ivanov@dmail.ru`,
          name: `Ivan`,
          avatarUrl: AVATAR_URL,
        },
        message: `Be happy in this life`,
      },
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              setActiveGenre={() => {}}
              loadPromo={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
