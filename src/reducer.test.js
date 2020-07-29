import {reducer, setCurrentGenre} from './reducer.js';
import filmsMock from './mocks/films.js';
import {FILTER_ALL_GENRES} from './data.js';

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  films: [],
};

it(`Reducer should return to its original state without additional parameters`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`currentGenre working correctly`, () => {
  const newInitialState = {
    currentGenre: filmsMock[2].genre,
    films: [],
  };

  expect(reducer(initialState, setCurrentGenre(filmsMock[2].genre))).toEqual(newInitialState);
});
