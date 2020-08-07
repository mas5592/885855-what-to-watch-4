import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space';
import {card, films, filmReviews} from '../../utils/test-data.js';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieCard e2e tests`, () => {
  it(`MovieCard be clicked`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        card,
        films,
        filmReviews
      },
    });
    const handleFilmClick = jest.fn();

    const mainComponent = shallow(
        <Provider store={store}>
          <MovieCard
            film={card}
            onMovieCardClick={handleFilmClick}
            onMovieCardMouseEnter={() => {}}
            onMovieCardMouseOut={() => {}} />
        </Provider>
    );
    const cards = mainComponent.find(`.small-movie-card`);

    cards.forEach((film) => {
      const title = film.find(`.small-movie-card__title`);
      title.simulate(`click`, {
        preventDefault: handleFilmClick,
      });

      const image = film.find(`.small-movie-card__image`);
      image.simulate(`click`, {
        preventDefault: handleFilmClick,
      });
    });

    expect(handleFilmClick).toEqual(handleFilmClick);
  });
});
