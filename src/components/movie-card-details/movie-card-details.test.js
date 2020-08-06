import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardDetails from './movie-card-details.jsx';
import {card} from '../../utils/test-data.js';

describe(`MovieCardDetails`, () => {
  it(`Should MovieCardDetails render correctly`, () => {
    const {
      date,
      director,
      filmDurationTime,
      genre,
      starring,
    } = card;

    const tree = renderer
      .create(<MovieCardDetails
        genre={genre}
        director={director}
        starring={starring}
        date={date}
        filmDurationTime={filmDurationTime}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
