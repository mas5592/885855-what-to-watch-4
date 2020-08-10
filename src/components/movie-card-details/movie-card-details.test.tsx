import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieCardDetails from './movie-card-details';
import {card} from '../../test-data';

describe(`MovieCardDetails`, () => {
  it(`Should MovieCardDetails render correctly`, () => {
    const tree = renderer
      .create(<MovieCardDetails
        activeFilm={card}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
