import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMoreButton} from './show-more-button.jsx';
import {LIMIT_FILMS_COUNT} from '../../data.js';

const films = [
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  },
  {
    name: `Name`,
    poster: `https://poster-url.com`,
    coverBackground: `https://image-url.com/1.jpg`,
    director: `Director Name`,
    starring: [`Actor 1`, `Actor 2`, `Actor 3`],
    runTime: `1h 00m`,
    genre: `Movie Genre`,
    releaseYear: 2000,
    rating: 8.9,
    count: 240,
    description: `Movie description`,
    reviews: [
      {
        rating: 9,
        date: `May 26, 1993`,
        author: `Author`,
        text: `Review text`
      }
    ]
  }
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should call handler on button click`, () => {
  const showMoreFilmsButtonClickHandler = jest.fn();

  const showMoreButton = mount(
      <ShowMoreButton
        films={films}
        showedFilms={LIMIT_FILMS_COUNT}
        showMoreFilms={showMoreFilmsButtonClickHandler}
      />
  );

  showMoreButton.find(`button.catalog__button`).simulate(`click`);

  expect(showMoreFilmsButtonClickHandler.mock.calls.length).toBe(1);
});
