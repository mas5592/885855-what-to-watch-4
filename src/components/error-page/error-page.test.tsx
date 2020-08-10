import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ErrorPage from './error-page';
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
