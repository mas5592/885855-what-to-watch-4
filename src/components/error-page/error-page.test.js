import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPage from './error-page.jsx';
import {Router} from 'react-router-dom';
import history from '../../history';

describe(`ErrorPage`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <ErrorPage />
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
