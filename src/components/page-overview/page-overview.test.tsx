import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PageOverview from './page-overview';
import {card} from '../../test-data';

describe(`PageOverview`, () => {
  it(`Should PageOverview render correctly`, () => {

    const tree = renderer
      .create(<PageOverview
        activeFilm={card}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
