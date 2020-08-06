import React from 'react';
import renderer from 'react-test-renderer';
import history from '../../history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import NameSpace from '../../reducer/name-space';
import {card} from '../../utils/test-data.js';
import {AuthorizationStatus} from '../../const';
import MyListButton from './my-list-button';

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
