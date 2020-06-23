import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

const film = {
  id: 1,
  title: `Aviator`,
  src: `aviator.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Card be hovered`, () => {
  const onFilmHover = jest.fn((args) => args);

  const card = shallow(
      <Card
        film={film}
        onFilmTitleClick={() => { }}
        onFilmHover={onFilmHover} />
  );

  const cardElement = card.find(`.small-movie-card`);
  cardElement.simulate(`mouseover`, film);

  expect(onFilmHover).toHaveBeenCalledTimes(1);
  expect(onFilmHover.mock.calls[0][0]).toMatchObject(film);
});
