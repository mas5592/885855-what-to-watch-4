import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {reducer, ActionType, Operation} from './data.js';
import {films} from '../../data.js';

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentFilmComments: [],
    films: [],
    promo: {}
  });
});

it(`Reducer should update films by load films from the server`, () => {
  expect(
      reducer(
          {
            currentFilmComments: [],
            films: [],
            promo: {}
          },
          {
            type: ActionType.LOAD_FILMS,
            payload: films
          }
      )
  ).toEqual({
    currentFilmComments: [],
    films,
    promo: {}
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock.onGet(`/films`).reply(200, []);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: []
      });
    });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadPromo();

    apiMock.onGet(`/films/promo`).reply(200, {});

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_PROMO_FILM,
        payload: {}
      });
    });
  });

  it(`Should make a correct API call to /comments/1`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadComments(1);

    apiMock.onGet(`/comments/1`).reply(200, []);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS,
        payload: []
      });
    });
  });
});
