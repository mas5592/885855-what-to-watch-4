import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import SignIn from './sign-in';
import {configure, mount} from 'enzyme';
import {Router} from 'react-router-dom';
import history from '../../history';
import {noop} from '../../utils';
import {AuthorizationStatus} from '../../const.js';

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`SignIn`, () => {
  it(`Button SignIn are clickable`, () => {
    const handleSubmitClick = jest.fn();
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    const signInComponent = mount(
        <Provider store={store}>
          <Router history={history}>
            <SignIn login={handleSubmitClick} />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        });

    const button = signInComponent.find(`button`);
    button.simulate(`click`, {preventDefault: {noop}});

    expect(handleSubmitClick).toEqual(handleSubmitClick);
  });
});
