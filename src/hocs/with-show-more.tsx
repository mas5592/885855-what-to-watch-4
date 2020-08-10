import * as React from 'react';
import {connect} from 'react-redux';
import {LIMIT_FILMS_COUNT, PageNames} from '../const';
import ShowMoreBtn from '../components/show-more-btn/show-more-btn';
import {getFilteredFilmsByGenre, getFilteredFilmsLikeThis} from '../reducer/state/selectors';
import {FilmType} from '../types';

interface Props {
 films: Array<FilmType>;
}

interface State {
  shownFilms: Array<FilmType>;
}

const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        shownFilms: props.films.slice(0, LIMIT_FILMS_COUNT),
      };

      this._renderBtnShowMore = this._renderBtnShowMore.bind(this);
      this._handleShowMoreBtnClick = this._handleShowMoreBtnClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          shownFilms: this.props.films.slice(0, LIMIT_FILMS_COUNT),
        });
      }
    }

    _handleShowMoreBtnClick() {
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

    _renderBtnShowMore() {
      return (
        this.props.films.length > this.state.shownFilms.length && <ShowMoreBtn
          onShowMoreClick={this._handleShowMoreBtnClick}
        />
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          films={this.state.shownFilms}
          render={this._renderBtnShowMore}
        />
      );
    }
  }

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
