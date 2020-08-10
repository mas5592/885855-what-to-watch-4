import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import MovieCard from './movie-card';
import {card} from '../../test-data';
import history from '../../history';
import {noop} from '../../utils';

describe(`MovieCard`, () => {
  it(`Should render correctly card`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <MovieCard
              film={card}
              isPlaying={false}
              handlePlayFilm={noop}
            />
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
