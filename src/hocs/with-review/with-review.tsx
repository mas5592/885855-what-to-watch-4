import * as React from 'react';
import {connect} from 'react-redux';
import {Operations as DataOperations, ActionCreator} from '../../reducer/data/data';
import {getActiveFilmById} from '../../reducer/state/selectors';
import {getIsReviewSending, getIsDispatchError} from '../../reducer/data/selectors';
import {FilmType} from '../../types';
import {ReviewLength, RATINGS_NUMBER} from '../../const';

const validateReview = (comment) => {
  return comment.length >= ReviewLength.MIN && comment.length <= ReviewLength.MAX;
};

interface Props {
  onReviewSubmit(filmId: number, review: {
    rating: number;
    comment: string;
  }): void;
  isReviewSending: boolean;
  clearSendingError(): void;
  activeFilm: FilmType;
}

interface State {
  comment: string;
  rating: number;
  reviewIsValid: boolean;
  ratingIsValid: boolean;
}

const withReview = (Component) => {
  class WithReview extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: RATINGS_NUMBER,
        comment: ``,
        reviewIsValid: false,
        ratingIsValid: true,
      };

      this.handleFormChange = this.handleFormChange.bind(this);
      this.handleSubmitClick = this.handleSubmitClick.bind(this);
      this.handleReviewChange = this.handleReviewChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    private handleFormChange() {
      const {clearSendingError} = this.props;
      clearSendingError();
    }

    private handleRatingChange(evt) {
      const {value} = evt.target;
      this.setState({
        rating: value,
        ratingIsValid: !!value,
      });
    }

    private handleReviewChange(evt) {
      const {value} = evt.target;
      this.setState({
        comment: value,
        reviewIsValid: validateReview(value),
      });
    }

    private handleSubmitClick(evt) {
      evt.preventDefault();
      const {activeFilm, onReviewSubmit} = this.props;
      const review = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      onReviewSubmit(activeFilm.id, review);
    }

    render() {
      const {activeFilm} = this.props;

      return (
        <Component
          {...this.props}
          activeFilm={activeFilm}
          onFormChange={this.handleFormChange}
          onSubmitClick={this.handleSubmitClick}
          onRatingChange={this.handleRatingChange}
          onReviewChange={this.handleReviewChange}
        />
      );
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    activeFilm: getActiveFilmById(state, ownProps),
    isReviewSending: getIsReviewSending(state),
    isDispatchError: getIsDispatchError(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewSubmit(filmId, review) {
      dispatch(DataOperations.pushReview(filmId, review));
    },
    clearSendingError() {
      dispatch(ActionCreator.clearSendingError());
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReview);
};

export default withReview;
