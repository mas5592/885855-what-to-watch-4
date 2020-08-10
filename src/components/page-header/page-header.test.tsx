import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {PageNames} from '../../const';
import {PageHeader} from './page-header';
import {AVATAR_URL} from '../../const.js';

const userInfo = {
  id: 1,
  email: `sadas@dsasd.ru`,
  name: `asdasd`,
  avatarURL: AVATAR_URL,
};

describe(`PageHeader`, () => {
  it(`Should be displayed correctly when the main page and the user are logged in`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              currentPage={PageNames.MAIN}
              isSignedIn={true}
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
              currentPage={PageNames.ADD_REVIEW}
              isSignedIn={false}
              userInfo={userInfo}
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
              currentPage={PageNames.ADD_REVIEW}
              isSignedIn={true}
              userInfo={userInfo}
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
              currentPage={PageNames.SIGN_IN}
              isSignedIn={false}
              userInfo={userInfo}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
