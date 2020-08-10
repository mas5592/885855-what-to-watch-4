import * as React from 'react';
import {connect} from 'react-redux';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import MoviesList from '../movies-list/movies-list';
import {getFavoriteFilms} from '../../reducer/data/selectors';
import {PageNames} from '../../const';
import {FilmType} from '../../types';

interface Props {
  favoriteFilms: Array<FilmType>;
}

const MyList: React.FC<Props> = (props: Props) => {
  const {
    favoriteFilms
  } = props;

  return (
    <React.Fragment>
      <div className="user-page">
        <PageHeader
          currentPage={PageNames.MY_LIST}
        />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesList
            films={favoriteFilms}
          />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

export default connect(mapStateToProps)(MyList);
