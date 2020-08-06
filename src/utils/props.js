import PropTypes from 'prop-types';

export const CustomPropTypes = {
  FILM: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
    coverBackground: PropTypes.string,
    poster: PropTypes.string,
    picture: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
    scores: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    filmDurationTime: PropTypes.number,
    preview: PropTypes.string,
    videoUrl: PropTypes.string,
    isFavorite: PropTypes.bool,
    backgroundColor: PropTypes.string,
  }),
  REVIEWS: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string,
  }),
};
