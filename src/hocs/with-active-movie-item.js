import React, {PureComponent} from 'react';

const withActiveMovieItem = (Component) => {

  class WithActiveMovieItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };

      this._setActiveCard = this._setActiveCard.bind(this);
    }

    _setActiveCard(activeCard) {
      this.setState({
        activeCard
      });
    }

    render() {
      const {activeCard} = this.state;

      return <Component
        {...this.props}
        activeCard={activeCard}
        setActiveCard={this._setActiveCard}
      />;
    }
  }

  WithActiveMovieItem.propTypes = {};

  return WithActiveMovieItem;
};

export default withActiveMovieItem;
