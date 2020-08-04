import React from 'react';
import {Provider} from 'react-redux';
import Main from './main.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {films, FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';
import Namespace from '../../reducer/namespace.js';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should card be pressed`, () => {
  const store = mockStore({
    [Namespace.DATA]: {
      films,
      promo: films[0]
    },
    [Namespace.STATE]: {
      genre: FILTER_ALL_GENRES,
      showedFilms: LIMIT_FILMS_COUNT
    }
  });

  const filmClickHandler = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main
          promo={films[0]}
          onFilmCardClick={filmClickHandler}
          isVideoPlayerFull={false}
          onVisibilityChange={() => {}}
        />
      </Provider>
  );

  const Card = main
    .find(`article.small-movie-card.catalog__movies-card`)
    .first();

  Card.props().onClick();

  expect(filmClickHandler.mock.calls.length).toBe(1);
});
