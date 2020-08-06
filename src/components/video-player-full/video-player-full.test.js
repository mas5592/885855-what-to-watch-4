import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import {films} from '../../utils/test-data.js';
import VideoPlayerFull from './video-player-full.jsx';
import {PageNames} from '../../const.js';

const film = films[0];
const mockStore = configureStore([]);

describe(`VideoPlayerFull`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      currentPage: PageNames.MAIN,
    },
  });

  it(`Render VideoPlayerFull`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <VideoPlayerFull
              currentTime={20}
              duration={100}
              card={film}
              isPlaying={true}
              leftTime={`00:10:12`}
              onClosePlayerClick={() => {}}
              onIsPlayingChange={() => {}}
              onSetFullScreen={() => {}}
            ><video/>
            </VideoPlayerFull>
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
