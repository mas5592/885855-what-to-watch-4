import React, {PureComponent} from 'react';
import MovieNavTabs from '../components/movie-nav-tabs/movie-nav-tabs.jsx';

const withMovieNavTabs = (Component) => {
  class WithMovieNavTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: `Overview`,
      };

      this._getMovieNavTabs = this._getMovieNavTabs.bind(this);
      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _getMovieNavTabs() {
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
        renderMovieNavTabs={this._getMovieNavTabs}
        activeTab={activeTab}
      />;
    }
  }

  return WithMovieNavTabs;
};

export default withMovieNavTabs;
