import * as React from 'react';
import * as renderer from "react-test-renderer";
import Loading from './loading';

describe(`Loader`, () => {
  it(`Should render loading correctly`, () => {
    const tree = renderer
      .create(
          <Loading />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
