import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import MyList from './my-list';
import {films} from '../../test-data';
import {AuthorizationStatus, AVATAR_URL} from '../../const';
import history from '../../history';

const mockStore = configureStore([]);

describe(`MyList`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      favoriteFilms: films,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {
        id: 1,
        email: `ivanov@dmail.ru`,
        name: `Ivan`,
        avatarURL: AVATAR_URL,
      }
    }
  });

  it(`Should MyList render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MyList />
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
