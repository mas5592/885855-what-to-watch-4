import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveMovieItem from './with-active-movie-item.jsx';
import {films} from '../../data.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveMovieItem(MockComponent);

it(`Should change selected film ID on mouseover/mouseout`, () => {
  const wrapper = shallow(
      <MockComponentWrapped films={films} onFilmCardClick={() => {}} />
  );

  expect(wrapper.props().activeFilmId).toEqual(null);

  wrapper.props().onFilmCardMouseOver(0);
  expect(wrapper.props().activeFilmId).toEqual(0);

  wrapper.props().onFilmCardMouseOut();
  expect(wrapper.props().activeFilmId).toEqual(null);
});
