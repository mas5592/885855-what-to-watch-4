import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {LIMIT_FILMS_COUNT, PageNames} from '../const';
import {CustomPropTypes} from '../utils/props.js';
import ShowMoreButton from '../components/show-more-btn/show-more-btn.jsx';
import {getFilteredFilmsByGenre, getFilteredFilmsLikeThis} from '../reducer/data/selectors';

const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        shownFilms: props.films.slice(0, LIMIT_FILMS_COUNT),
      };

      this._renderButtonShowMore = this._renderButtonShowMore.bind(this);
      this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          shownFilms: this.props.films.slice(0, LIMIT_FILMS_COUNT),
        });
      }
    }

    _handleShowMoreButtonClick() {
      this.setState((prevState) => ({
        shownFilms: [
          ...prevState.shownFilms,
          ...this.props.films.slice(
              prevState.shownFilms.length,
              prevState.shownFilms.length + LIMIT_FILMS_COUNT
          )
        ]
      }));
    }

    _renderButtonShowMore() {
      return (
        this.props.films.length > this.state.shownFilms.length && <ShowMoreButton
          onShowMoreClick={this._handleShowMoreButtonClick}
        />
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          films={this.state.shownFilms}
          render={this._renderButtonShowMore}
        />
      );
    }
  }

  WithShowMore.propTypes = {
    films: PropTypes.arrayOf(CustomPropTypes.FILM).isRequired,
  };

  const mapStateToProps = (state, ownProps) => {
    if (ownProps.currentPage !== PageNames.MAIN) {
      return {
        films: getFilteredFilmsLikeThis(state),
      };
    }

    return {
      films: getFilteredFilmsByGenre(state),
    };
  };

  return connect(mapStateToProps)(WithShowMore);
};

export default withShowMore;
