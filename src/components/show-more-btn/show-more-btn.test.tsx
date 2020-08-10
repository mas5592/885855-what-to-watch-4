import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMoreBtn from './show-more-btn';

const handleBtnClick = jest.fn();

describe(`ShowMoreBtn`, () => {
  it(`Should render ShowMoreBtn component`, () => {
    const tree = renderer
      .create(<ShowMoreBtn
        onShowMoreClick={handleBtnClick}
      />)
          .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
