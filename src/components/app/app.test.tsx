import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {App} from './app';
import {card, films, reviews} from '../../test-data';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {FILTER_ALL_GENRES, AVATAR_URL, AuthorizationStatus, PageNames} from '../../const.js';
import {noop} from '../../utils';

const mockStore = configureStore([]);

describe(`App`, () => {
  it(`Should render App component`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        card,
        films,
        filmReviews: reviews,
        isLoading: false,
        isLoadError: false,
      },
      [NameSpace.STATE]: {
        activeGenre: FILTER_ALL_GENRES,
        currentPage: PageNames.MAIN,
        activeFilm: card,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        isAuthorizationError: false,
        isAuthorizationProgress: true,
        userInfo: {
          id: 1,
          email: `ivanov@dmail.ru`,
          name: `Ivan`,
          avatarURL: AVATAR_URL,
        },
        message: `Be happy in this life`,
      },
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              setActiveGenre={noop}
              loadPromo={noop}
              isLoadError={false}
              isAuthorizationProgress={true}
              isLoading={false}
              authorizationStatus={AuthorizationStatus.AUTH}
              card={card}
              isVideoPlayer={false}
              films={films}
              login={`ivanov@dmail.ru`}
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
