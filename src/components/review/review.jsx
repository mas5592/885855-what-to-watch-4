import React from 'react';
import moment from 'moment';
import {CustomPropTypes} from '../../utils/props.js';
import {getTextRatingFormat} from '../../utils/utils.js';
import {FormatDate} from '../../const.js';

const Review = ({filmReview}) => {
  const rating = getTextRatingFormat(filmReview.rating);
  const date = moment(filmReview.date).format(FormatDate.DATA);
  const dateToISO = moment(filmReview.date).format(FormatDate.DATA_TO_ISO);

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

Review.propTypes = {
  filmReview: CustomPropTypes.REVIEWS,
};

export default Review;
