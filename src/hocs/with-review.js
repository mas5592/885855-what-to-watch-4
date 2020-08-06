import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operations as DataOperations} from '../reducer/data/data.js';
import {getActiveFilmById} from '../reducer/state/selectors.js';
import {getIsReviewSending, getIsDispatchError} from '../reducer/data/selectors.js';
import {CustomPropTypes} from '../utils/props';
import {ReviewLength} from '../const';

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        comment: ``,
        isSubmitDisabled: true,
      };

      this._handleSubmitClick = this._handleSubmitClick.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleReviewChange(evt) {
      const {isDataSending} = this.props;

      this.setState({
        comment: evt.target.value,
        isSubmitDisabled: evt.target.value.length < ReviewLength.MIN || isDataSending,
      });
    }

    _handleSubmitClick(evt) {
      const {activeFilm, onReviewSubmit} = this.props;
      const review = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      evt.preventDefault();
      onReviewSubmit(activeFilm.id, review);
    }

    render() {
      const {activeFilm} = this.props;

      return (
        <Component
          {...this.props}
          activeFilm={activeFilm}
          onSubmitClick={this._handleSubmitClick}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          isSubmitDisabled={this.state.isSubmitDisabled}
        />
      );
    }
  }

  WithReview.propTypes = {
    activeFilm: CustomPropTypes.FILM,
    isDataSending: PropTypes.bool.isRequired,
    isDispatchError: PropTypes.bool.isRequired,
    onReviewSubmit: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state, ownProps) => ({
    activeFilm: getActiveFilmById(state, ownProps),
    isDataSending: getIsReviewSending(state),
    isDispatchError: getIsDispatchError(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewSubmit(filmId, review) {
      dispatch(DataOperations.pushReview(filmId, review));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReview);
};

export default withReview;
