import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {promo} from '../../data.js';

const films = [
  {
    id: 1,
    title: `Aviator`,
    src: `aviator.jpg`
  },
  {
    id: 2,
    title: `The Grand Budapest Hotel`,
    src: `bg-the-grand-budapest-hotel.jpg`
  }
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be clicked`, () => {
  const filmTitleClickHandler = jest.fn();

  const main = shallow(
      <Main
        promo={promo}
        films={films}
        onFilmTitleClick={filmTitleClickHandler}
      />
  );

  const titles = main.find(`.small-movie-card__title`);
  const titleCount = titles.length;

  titles.forEach((title) => title.simulate(`click`));

  expect(filmTitleClickHandler.mock.calls.length).toBe(titleCount);
});
