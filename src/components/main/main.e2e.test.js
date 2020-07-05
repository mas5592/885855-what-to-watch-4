import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {promo, films} from '../../data.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be clicked`, () => {
  const onFilmClick = jest.fn();

  const main = shallow(
      <Main
        promo={promo}
        films={films}
        onFilmClick={onFilmClick}
      />
  );

  const titleCount = main.find(`a.small-movie-card__link`);

  titleCount.forEach((title) => {
    title.props().onClick();
  });

  expect(onFilmClick.mock.calls.length).toBe(titleCount.length);
});
