import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
import {connect} from 'react-redux';
import {CustomPropTypes} from '../../utils/props.js';
import {sliceReviews} from '../../utils/utils';
import {getFilmReviews} from '../../reducer/data/selectors';

const PageReviews = ({filmReviews}) => {
  const slicedReviews = sliceReviews(filmReviews);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {slicedReviews.map((slicedReview, index) => {
          return (
            <div key={Math.random() + index} className="movie-card__reviews-col">
              {slicedReview.map((review) => <Review filmReview={review} key={Math.random() + review.id} />)}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
PageReviews.propTypes = {
  filmReviews: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(CustomPropTypes.REVIEWS),
    PropTypes.bool,
  ]),
};

const mapStateToProps = (state) => ({
  filmReviews: getFilmReviews(state)
});
export default connect(mapStateToProps)(PageReviews);

