import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card.jsx';

const film = {
  id: 1,
  title: `Aviator`,
  src: `aviator.jpg`
};

it(`Render catalog card`, () => {
  const cardComponent = renderer
    .create(
        <Card
          film={film}
          filmTitleClickHandler={() => { }}
          onFilmTitleClick={() => { }}
          onFilmHover={() => { }}
        />)
    .toJSON();

  expect(cardComponent).toMatchSnapshot();
});
