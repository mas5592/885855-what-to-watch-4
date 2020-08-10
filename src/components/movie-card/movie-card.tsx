import * as React from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {FilmType} from '../../types';
import {AppRoute} from '../../const';

interface Props {
  film: FilmType;
  isPlaying: boolean;
  handlePlayFilm: (b: boolean) => void;
}

const MovieCard: React.FC<Props> = (props: Props) => {
  const {
    film,
    isPlaying,
    handlePlayFilm
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handlePlayFilm(true)}
      onMouseLeave={() => handlePlayFilm(false)}
    >
      <Link
        className="small-movie-card__link"
        to={`${AppRoute.PAGE}/${film.id}`}>
        <div
          className="small-movie-card__image">
          <VideoPlayer
            isPlaying={isPlaying}
            source={film.preview}
            poster={film.poster}
          />
          <img
            src={film.poster}
            alt={film.title}
            width={280}
            height={175}
          />
        </div>
        <h3 className="small-movie-card__title">{film.title}</h3>
      </Link>
    </article>
  );
};

export default MovieCard;

