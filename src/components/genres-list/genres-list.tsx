import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/state/state';
import {getFilmsGenres} from '../../reducer/data/selectors';
import {getActiveGenre} from '../../reducer/state/selectors';

interface Props {
  genres: Array<string>;
  activeGenre: string;
  onGenreItemClick(genre: string): void;
}

const GenresList: React.FC<Props> = (props: Props) => {
  const {
    genres,
    activeGenre,
    onGenreItemClick
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (<li
          key={`${genre}-${index}`}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreItemClick(genre);
            }}>{genre}</a>
        </li>);
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  genres: getFilmsGenres(state),
  activeGenre: getActiveGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
