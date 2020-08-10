import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Review from './review';

const review = {
  id: 4563456345,
  user: {
    id: 1223,
    name: `Ivan Ivanov`,
  },
  rating: 8.0,
  comment: `This movie is very interesting`,
  date: `2020-11-10T17:10:01.455Z`,
};

describe(`Review`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<Review
        filmReview={review}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
