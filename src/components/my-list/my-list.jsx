import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PageHeader from '../page-header/page-header.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import {CustomPropTypes} from '../../utils/props.js';
import {getFavoriteFilms} from '../../reducer/data/selectors.js';
import {PageNames} from '../../const';

const MyList = (props) => {
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
            render={() => {}} />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.oneOfType([
    PropTypes.arrayOf(CustomPropTypes.FILM),
    PropTypes.arrayOf(undefined)
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

export default connect(mapStateToProps)(MyList);
