import * as React from 'react';
import {FilmType} from '../types';
import {Subtract} from 'utility-types';

interface Props {
  film: FilmType;
}

interface State {
  isPlaying: boolean;
}

interface InjectedProps {
  isPlaying: boolean;
  handlePlayFilm: (isPlaying: boolean) => void;
}

const withVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;
  class WithVideo extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._handlePlayFilm = this._handlePlayFilm.bind(this);
    }

    _handlePlayFilm(isPlaying) {
      this.setState({
        isPlaying
      });
    }
    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        isPlaying={isPlaying}
        handlePlayFilm={this._handlePlayFilm}
      />;
    }
  }

  return WithVideo;
};

export default withVideo;
