import {reducer, ActionCreator, ActionType} from '../../reducer/state/state.js';
import {FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';

const initialState = {
  genre: FILTER_ALL_GENRES,
  showedFilms: LIMIT_FILMS_COUNT
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it(`Reducer should change genre`, () => {
  expect(
      reducer(
          {genre: FILTER_ALL_GENRES},
          {
            type: ActionType.SET_CURRENT_GENRE,
            payload: `Action`
          }
      )
  ).toEqual({
    genre: `Action`
  });

  expect(
      reducer(
          {genre: FILTER_ALL_GENRES},
          {
            type: ActionType.SET_CURRENT_GENRE,
            payload: `Comdey`
          }
      )
  ).toEqual({genre: `Comdey`});
});

it(`Reducer should increase and reset showed films counter`, () => {
  expect(
      reducer(
          {showedFilms: LIMIT_FILMS_COUNT},
          {
            type: ActionType.SET_MORE_FILMS
          }
      )
  ).toEqual({
    showedFilms: 16
  });

  expect(
      reducer(
          {showedFilms: 1},
          {
            type: ActionType.RESET_SHOWED_FILMS_AMOUNT
          }
      )
  ).toEqual({
    showedFilms: LIMIT_FILMS_COUNT
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre changing returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Action`)).toEqual({
      type: ActionType.SET_CURRENT_GENRE,
      payload: `Action`
    });
  });

  it(`Action creator for genre changing returns default genre if no genre provided`, () => {
    expect(ActionCreator.changeGenre()).toEqual({
      type: ActionType.SET_CURRENT_GENRE,
      payload: FILTER_ALL_GENRES
    });
  });
});
