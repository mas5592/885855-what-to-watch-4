import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import history from '../../history.js';
import {PageHeader} from './page-header';
import {AVATAR_URL} from '../../const.js';

const userInfo = {
  id: 1,
  email: `ivan@dsasd.ru`,
  name: `Ivan`,
  avatarUrl: AVATAR_URL,
};

describe(`PageHeader`, () => {
  it(`Should be displayed correctly when the main page and the user are logged in`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              isMainPage={true}
              isSignInPage={false}
              isSignedIn={true}
              onSignInClick={() => {}}
              userInfo={userInfo}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should be displayed correctly when the main page is located and the user is not logged in`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              isMainPage={true}
              isSignInPage={false}
              isSignedIn={false}
              onSignInClick={() => {}}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should be displayed correctly when it is not the main page or the login page`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              isMainPage={false}
              isSignInPage={false}
              isSignedIn={false}
              onSignInClick={() => {}}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should be displayed correctly when you log in to the page`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              isMainPage={false}
              isSignInPage={true}
              isSignedIn={false}
              onSignInClick={() => {}}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
