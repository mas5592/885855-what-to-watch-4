import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main';
import {card, films, reviews} from '../../test-data';
import NameSpace from '../../reducer/name-space';
import {Router} from 'react-router-dom';
import history from '../../history';
import {noop} from '../../utils';
import {genres, activeGenre, FILTER_ALL_GENRES, AVATAR_URL, AuthorizationStatus, PageNames} from '../../const.js';

const mockStore = configureStore([]);

describe(`Main`, () => {
  it(`Shold Main render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        card,
        films,
        filmsReviews: reviews,
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
          email: `ivanov@dmail.ru`,
          name: `Ivan`,
          avatarURL: AVATAR_URL,
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
                onFilmClick={noop}
                onGenreItemClick={noop}
                onShowMoreClick={noop}
                onPlayClick={noop}
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
