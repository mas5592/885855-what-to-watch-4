import * as React from 'react';
import MovieCard from '../movie-card/movie-card';
import withVideoPlay from '../../hocs/with-video-play';
import {FilmType} from '../../types';

const MovieCardWrapped = withVideoPlay(MovieCard);

interface Props {
  films: Array<FilmType>;
  render?: () => JSX.Element;
}

const MoviesList: React.FC<Props> = (props: Props) => {

  const {
    films,
    render
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <MovieCardWrapped
              key={film.id}
              film={film}
            />
          );
        })}
      </div>
      {render && render()}
    </React.Fragment>
  );
};

export default MoviesList;
