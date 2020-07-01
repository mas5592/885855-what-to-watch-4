import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

const film = {
  id: 1,
  title: `Aviator`,
  img: `img/aviator.jpg`,
  release: 2004,
  genre: `Dramas`,
  poster: `https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/5d4dbb46-36e2-4892-a71d-fded5d0fe86d/x1000`,
  coverBackground: `img/aviator.jpg`,
  rating: {
    score: 8.9,
    level: `Very good`,
    count: 240
  },
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  team: {
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
  },
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card be hovered`, () => {
  const hoverHandler = jest.fn();
  const clickHandler = jest.fn();

  const card = mount(
      <Card
        film={film}
        onFilmHover={hoverHandler}
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
        onFilmHover={hoverHandler}
        onFilmClick={clickHandler}
      />
  );

  card.find(`a.small-movie-card__link`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
