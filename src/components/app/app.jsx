import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieTitle, movieGenre, movieYear} = props;

  return <React.Fragment>
    <Main
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear}
    />
  </React.Fragment>;
};

export default App;
