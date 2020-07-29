import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {promo, films, FILTER_ALL_GENRES} from '../../data.js';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be clicked`, () => {
  const onFilmClick = jest.fn();
  const store = mockStore({
    currentGenre: FILTER_ALL_GENRES,
    films,
  });

  const main = shallow(
      <Provider store={store}>
        <Main
          promo={promo}
          films={films}
          onFilmClick={onFilmClick}
        />
      </Provider>
  );

  const titleCount = main.find(`a.small-movie-card__link`);

  titleCount.forEach((title) => {
    title.props().onClick();
  });

  expect(onFilmClick.mock.calls.length).toBe(titleCount.length);
});
