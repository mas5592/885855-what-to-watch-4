import {reducer, setCurrentGenre} from './reducer.js';
import films from './mocks/films.js';
import {FILTER_ALL_GENRES} from './data.js';

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  films: [],
};


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Action working correctly`, () => {
  const newInitialState = {
    currentGenre: films[2].genre,
    films: [],
  };

  expect(reducer(initialState, setCurrentGenre(films[2].genre))).toEqual(newInitialState);
});
