import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main.jsx';
import {card, films, filmsReviews} from '../../utils/test-data.js';
import NameSpace from '../../reducer/name-space';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import {genres, activeGenre, FILTER_ALL_GENRES, AVATAR_URL, AuthorizationStatus, PageNames} from '../../const.js';

const mockStore = configureStore([]);

describe(`Main`, () => {
  it(`Shold Main render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        card,
        films,
        filmsReviews,
      },
      [NameSpace.STATE]: {
        activeGenre: FILTER_ALL_GENRES,
        currentPage: PageNames.MAIN,
        activeFilm: card,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          id: 1,
          email: `ivan@dmail.ru`,
          name: `Ivan`,
          avatarUrl: AVATAR_URL,
        },
        message: `Be happy in this life`,
      },
    });
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <Main
                card={card}
                films={films}
                genres={genres}
                activeGenre={activeGenre}
                onFilmClick={() => {}}
                onGenreItemClick={() => {}}
                onShowMoreClick={() => {}}
                onPlayClick={() => {}}
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
