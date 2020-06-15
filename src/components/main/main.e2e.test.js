import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {FILMS_TITLE, promo} from '../../data.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be clicked`, () => {
  const filmTitleClickHandler = jest.fn();

  const main = shallow(
      <Main
        promo={promo}
        filmsTitle = {FILMS_TITLE}
        onTitleClickHandler={filmTitleClickHandler}
      />
  );

  const titles = main.find(`.movie-card__title`);
  const titleCount = titles.length;

  titles.forEach((title) => title.simulate(`click`));

  expect(filmTitleClickHandler.mock.calls.length).toBe(titleCount);
});
