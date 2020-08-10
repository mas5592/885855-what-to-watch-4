import MockAdapter from 'axios-mock-adapter';
import {initialState, ActionType, reducer, Operations} from './data';
import {card as film, films, reviews} from '../../test-data';
import {createAPI} from '../../api';
import {adaptFilm} from '../../adapters/film';

const api = createAPI(() => {});

describe(`Data Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer must update films by downloading films from the server`, () => {
    expect(reducer({
      card: {},
    }, {
      type: ActionType.LOAD_FILM_CARD,
      payload: film,
    })).toEqual({
      card: film,
    });
  });

  it(`Reducer  must update the films according to the load`, () => {
    expect(reducer({
     films: [],
    }, {
      type: ActionType.LOAD_FILS,
      payload:films,
    })).toEqual({
     films,
    });
  });

  it(`Reducer must update reviews by load`, () => {
    expect(reducer({
      filmReviews: [],
    }, {
      type: ActionType.LOAD_FILM_REVIEWS,
      payload: reviews,
    })).toEqual({
      filmReviews: reviews,
    });
  });

  it(`Reducer must catch error on load fail`, () => {
    expect(reducer({
      isLoadError: false,
    }, {
      type: ActionType.CATCH_LOAD_ERROR,
      payload: true,
    })).toEqual({
      isLoadError: true,
    });
  });

  it(`Reducer must check if review is sending`, () => {
    expect(reducer({
      isReviewSending: false,
    }, {
      type: ActionType.CHECK_IS_DATA_SENDING,
      payload: true,
    })).toEqual({
      isReviewSending: true,
    });
  });

  it(`Reducer must check if review sending was successfull`, () => {
    expect(reducer({
      isDispatchSuccessful: false,
    }, {
      type: ActionType.CHECK_IS_DISPATCH_SUCCESSFUL,
      payload: true,
    })).toEqual({
      isDispatchSuccessful: true,
    });
  });

  it(`Reducer must check if is sending error`, () => {
    expect(reducer({
      isDispatchError: false,
    }, {
      type: ActionType.CHECK_IS_DISPATCH_ERROR,
      payload: true,
    })).toEqual({
      isDispatchError: true,
    });
  });

  it(`Reducer must clear sending error`, () => {
    expect(reducer({
      isDispatchError: true,
    }, {
      type: ActionType.CLEAR_SENDING_ERROR,
      payload: false,
    })).toEqual({
      isDispatchError: false,
    });
  });

  it(`Reducer must add favorite films to store`, () => {
    expect(reducer({
      favoriteFilms: [],
    }, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload:films,
    })).toEqual({
      favoriteFilms:films,
    });
  });

  it(`Reducer must finish loading`, () => {
    expect(reducer({
      isLoading: true,
    }, {
      type: ActionType.FINISH_LOADING,
      payload: false,
    })).toEqual({
      isLoading: false,
    });
  });
});

describe(`Operations are working correctly`, () => {
  it(`Should make the correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operations.loadPromo();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_FILS,
              payload: [adaptFilm({fake: true})],
            });
          });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const cardLoader = Operations.loadFilmCard();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return cardLoader(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_FILM_CARD,
              payload: adaptFilm({fake: true}),
            });
          });
  });

  it(`Should make the correct API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = Operations.loadFilmReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_FILM_REVIEWS,
              payload: [{fake: true}],
            });
          });
  });

  it(`Should send favorite film status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = Operations.loadFavoriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_FAVORITE_FILMS,
              payload: [adaptFilm({fake: true})],
            });
          });
  });

  it(`Should send review to /comments/1`, () => {
    const review = {
      rating: 5,
      comment: ``,
    };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const pushReview = Operations.pushReview(1, review);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{fake: true}]);

    return pushReview(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.CHECK_IS_DATA_SENDING,
              payload: true,
            });
          });
  });

  it(`Should send favorite film status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendFilmStatus = Operations.changeIsFilmFavorite(1, true);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, [{fake: true}]);

    return sendFilmStatus(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.CHECK_IS_DATA_SENDING,
              payload: false,
            });
          });
  });
});
