import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import MovieCard from './movie-card.jsx';
import {card} from '../../utils/test-data.js';
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import history from '../../history.js';

const mockStore = configureStore([]);

describe(`MovieCard`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      film: card,
    },
    [NameSpace.STATE]: {
      isVideoPlayer: false,
    },
  });
  it(`Should render correctly film card`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MovieCard
                film={card}
                onFilmClick={() => {}}
                onFilmHover={() => {}}
              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
