import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({films, promo}) => {
  return (
    <Main
      promo={promo}
      filmTitleClickHandler={() => {}}
      films={films}
    />
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};

export default App;
