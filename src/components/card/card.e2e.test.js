import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';
import {film} from '../../data.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card be hovered`, () => {
  const hoverHandler = jest.fn();
  const clickHandler = jest.fn();

  const card = mount(
      <Card
        film={film}
        onMouseOver={hoverHandler}
        onFilmClick={clickHandler}
      />
  );

  card.find(`article.small-movie-card`).simulate(`mouseover`);

  expect(hoverHandler).toHaveBeenCalledTimes(1);
  expect(hoverHandler.mock.calls[0][0]).toBe(film.id);
});

it(`Card be clicked`, () => {
  const hoverHandler = jest.fn();
  const clickHandler = jest.fn();

  const card = mount(
      <Card
        film={film}
        onMouseOver={hoverHandler}
        onFilmClick={clickHandler}
      />
  );

  card.find(`a.small-movie-card__link`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
