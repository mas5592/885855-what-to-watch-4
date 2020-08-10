import * as React from 'react';
import * as moment from 'moment';
import {ReviewType} from '../../types';
import {getRatingFormat} from '../../utils';

interface Props {
  filmReview: ReviewType;
}

const Review: React.FC<Props> = (props: Props) => {
  const {
    filmReview
  } = props;

  const rating = getRatingFormat(filmReview.rating);
  const date = moment(filmReview.date).format(`MMMM D, YYYY`);
  const dateToISO = moment(filmReview.date).format(`YYYY-MM-DD`);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{filmReview.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{filmReview.user.name}</cite>
          <time className="review__date" dateTime={dateToISO}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

export default Review;
