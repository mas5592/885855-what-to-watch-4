import * as React from 'react';
import {ReviewType} from '../../types';
import {connect} from 'react-redux';
import Review from '../review/review';
import {sliceReviews} from '../../utils';
import {getFilmReviews} from '../../reducer/data/selectors';

interface Props {
  filmReviews: Array<ReviewType>;
}

const PageReviews: React.FC<Props> = (props: Props) => {

  const {
    filmReviews
  } = props;

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

const mapStateToProps = (state) => ({
  filmReviews: getFilmReviews(state)
});

export default connect(mapStateToProps)(PageReviews);

