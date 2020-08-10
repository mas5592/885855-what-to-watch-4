export const adaptFilm = (film) => {
  return {
    id: film.id,
    coverBackground: film.background_image,
    backgroundColor: film.background_color,
    date: film.released,
    description: film.description,
    director: film.director,
    filmDurationTime: film.run_time,
    genre: film.genre,
    isFavorite: film.is_favorite,
    picture: film.preview_image,
    poster: film.poster_image,
    rating: film.rating,
    scores: film.scores_count,
    starring: film.starring,
    title: film.name,
    preview: film.preview_video_link,
    videoUrl: film.video_link,
  };
};

export const adaptFilms = (films) => films.map((film) => adaptFilm(film));
