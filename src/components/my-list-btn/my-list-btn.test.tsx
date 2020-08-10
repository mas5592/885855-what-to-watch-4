import * as React from 'react';
import * as renderer from 'react-test-renderer';
import history from '../../history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {card} from '../../test-data';
import {AuthorizationStatus} from '../../const';
import MyListButton from './my-list-btn';
import {Router} from 'react-router-dom';

const mockStore = configureStore([]);

describe(`MyListButton`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    }
  });

  it(`Should render MyListButton correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MyListButton
                film={card} />
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
