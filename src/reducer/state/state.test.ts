import {initialState, ActionType, reducer} from './state';
import {card, activeFilm} from '../../test-data';

describe(`State Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Should return the correct genre when it was changed`, () => {
    expect(reducer({
      activeGenre: `All genres`,
    }, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `Action`,
    })).toEqual({
      activeGenre: `Action`,
    });
  });

  it(`A new current film should return`, () => {
    expect(reducer({
      activeFilm: card,
    }, {
      type: ActionType.SET_CURRENT_FILM,
      payload: activeFilm,
    })).toEqual({
      activeFilm,
    });
  });

  it(`Must return true in the store when Player is active`, () => {
    expect(reducer({
      isVideoPlayer: false,
    }, {
      type: ActionType.PLAY_FILM,
      payload: true,
    })).toEqual({
      isVideoPlayer: true
    });
  });

  it(`Must return false in storage when FilmPlayer is not active`, () => {
    expect(reducer({
      isVideoPlayer: true,
    }, {
      type: ActionType.STOP_FILM,
      payload: false,
    })).toEqual({
      isVideoPlayer: false
    });
  });
});
