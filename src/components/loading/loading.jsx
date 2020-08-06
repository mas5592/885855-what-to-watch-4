import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  const loaderStyles = {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    minHeight: `100vh`,
    width: `100%`,
  };

  return (
    <div className="user-page">
      <div className="sign-in user-page__content" style={loaderStyles}>
        <ReactLoading
          type="Bubbles"
          color="#372824"
        />
      </div>
    </div>
  );
};

export default Loading;

