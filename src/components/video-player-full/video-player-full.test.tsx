import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {films} from '../../test-data';
import {noop} from '../../utils';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {Router} from 'react-router-dom';
import history from '../../history';
import VideoPlayerFull from './video-player-full';

const film = films[0];
const mockStore = configureStore([]);

describe(`VideoPlayerFull`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      currentPage: `main`,
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
              onIsPlayingChange={noop}
              onSetFullScreen={noop}
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
