export const getTextRating = (value) => {
  if (value >= 0 && value < 3) {
    return `Bad`;
  } else if (value >= 3 && value < 5) {
    return `Normal`;
  } else if (value >= 5 && value < 8) {
    return `Good`;
  } else if (value >= 8 && value <= 10) {
    return `Very good`;
  }

  return ``;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatTime = (time) =>
  [60, 60, 24]
    .map((n) => {
      const result = time % n;
      time = (time - result) / n;
      return (`0` + result).slice(-2);
    })
    .reverse()
    .join(`:`);

export const formatFilmDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}h ${(`0` + minutes).slice(-2)}m`;
};

export const normalizeFilmData = (film) =>
  Object.keys(film).length
    ? {
      name: film.name,
      poster: film.poster_image,
      previewUrl: film.preview_image,
      coverBackground: film.background_image,
      backgroundColor: film.background_color,
      description: film.description,
      rating: film.rating,
      count: film.scores_count,
      director: film.director,
      starring: film.starring,
      runTime: formatFilmDuration(film.run_time),
      genre: film.genre,
      releaseYear: film.released,
      id: film.id,
      isFavorite: film.is_favorite,
      videoUrl: film.video_link,
      trailerUrl: film.preview_video_link
    }
    : {};

export const normalizeFilmsData = (films) => films.map(normalizeFilmData);
