import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {promo, filmsTitle} = props;

  return (
    <Main
      promo={promo}
      filmsTitle={filmsTitle}
    />
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  filmsTitle: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
