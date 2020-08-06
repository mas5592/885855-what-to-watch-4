import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';
import {CustomPropTypes} from '../../utils/props.js';
import {ReviewLength, reviewSubmitButton, RATINGS_NUMBER} from '../../const';
import {PageNames, AppRoute} from '../../const.js';
import {Link} from 'react-router-dom';

const AddReview = ({
  activeFilm,
  isDispatchError,
  isReviewSending,
  isSubmitDisabled,
  onFormChange,
  onRatingChange,
  onReviewChange,
  onSubmitClick,
}) => {
  const {
    coverBackground,
    backgroundColor,
    poster,
    title
  } = activeFilm;

  const isRadioDisabled = isReviewSending ? true : false;

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor}}
      >
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={coverBackground} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader currentPage={PageNames.ADD_REVIEW}
          >
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={`${AppRoute.PAGE}/${activeFilm.id}`}
                    className="breadcrumbs__link">{activeFilm.title}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </PageHeader>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={poster}
              alt={title}
              width={218}
              height={327}
            />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={onSubmitClick}
            onChange={onFormChange}
          >
            <div className="rating">
              <div
                className="rating__stars"
                onChange={onRatingChange}>
                {Array.from(Array(RATINGS_NUMBER)).map((_, index) => {
                  const rating = index + 1;
                  return (
                    <React.Fragment key={rating}>
                      <input
                        className="rating__input"
                        id={`star-${rating}`}
                        type="radio"
                        name="rating"
                        value={rating}
                        disabled={isRadioDisabled}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div
              className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={ReviewLength.MIN}
                maxLength={ReviewLength.MAX}
                onChange={onReviewChange}
                required
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={isSubmitDisabled}
                >
                  {isReviewSending ? reviewSubmitButton.sending : reviewSubmitButton.post}
                </button>
              </div>

            </div>
          </form>
          {isDispatchError &&
            <p style={{color: `red`}}>
              Error while sending data. Please, try again later.
            </p>
          }
        </div>
      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = {
  activeFilm: CustomPropTypes.FILM,
  isReviewSending: PropTypes.bool,
  isDispatchError: PropTypes.bool,
  onSubmitClick: PropTypes.func,
  onFormChange: PropTypes.func,
  onRatingChange: PropTypes.func,
  onReviewChange: PropTypes.func,
  isSubmitDisabled: PropTypes.bool,
};

export default AddReview;
