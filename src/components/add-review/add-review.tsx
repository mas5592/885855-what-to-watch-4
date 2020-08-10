import * as React from 'react';
import PageHeader from '../page-header/page-header';
import {ReviewLength, reviewSubmitBtn, RATINGS_NUMBER} from '../../const';
import {PageNames, AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {FilmType} from '../../types';

interface Props {
  activeFilm: FilmType;
  isReviewSending: boolean;
  isDispatchError: boolean;
  onFormChange(): void;
  onRatingChange(): void;
  onReviewChange(): void;
  onSubmitClick(): void;
  ratingIsValid: boolean;
  reviewIsValid: boolean;
}

const AddReview: React.FunctionComponent<Props> = (props: Props) => {
  const {
    activeFilm,
    isReviewSending,
    isDispatchError,
    onSubmitClick,
    onFormChange,
    onRatingChange,
    onReviewChange,
    reviewIsValid,
    ratingIsValid
  } = props;

  const {
    backgroundColor,
    title,
    coverBackground,
    poster
  } = activeFilm;

  const isRadioDisabled = Boolean(isReviewSending);

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor}}
      >
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img
              src={coverBackground}
              alt={title}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <PageHeader currentPage={PageNames.ADD_REVIEW}>
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
                      <label
                        className="rating__label"
                        htmlFor={`star-${rating}`}>
                          Rating {rating}
                      </label>
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
                disabled={isReviewSending}
                required
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={!reviewIsValid && ratingIsValid}>
                  {isReviewSending ? reviewSubmitBtn.sending : reviewSubmitBtn.post}
                </button>
              </div>
            </div>
          </form>
          {isDispatchError &&
            <p style={{color: `red`}}>
              Ошибка при отправке данных. Пожалуйста, повторите попытку позже.
            </p>
          }
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddReview;
