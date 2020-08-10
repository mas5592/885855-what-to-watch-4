import * as React from 'react';

import MovieNavTabs from '../components/movie-nav-tabs/movie-nav-tabs';

interface State {
  activeTab: string;
}

interface InjectedProps {
  activeTab: string;
  handleTabClick: (activeTab: string) => void;
  getTabs: () => void;
}

const withMovieNavTabs = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  class WithMovieNavTabs extends React.PureComponent<P, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: `Overview`,
      };

      this._getTabs = this._getTabs.bind(this);
      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _getTabs() {
      const {activeTab} = this.state;

      return (
        <MovieNavTabs
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }

    _handleTabClick(currentTab) {
      this.setState({
        activeTab: currentTab
      });
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        renderMovieNavTabs={this._getTabs}
        activeTab={activeTab}
      />;
    }
  }

  return WithMovieNavTabs;
};

export default withMovieNavTabs;
