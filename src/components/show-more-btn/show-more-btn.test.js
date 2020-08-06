import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-btn.jsx';

const handleButtonClick = jest.fn();
describe(`ShowMoreButton`, () => {
  it(`Should render ShowMoreButton component`, () => {
    const tree = renderer
      .create(<ShowMoreButton
        onShowMoreClick={handleButtonClick}
      />)
          .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
