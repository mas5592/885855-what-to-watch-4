import {FilmType, ReviewType} from './types';

export const card: FilmType = {
  title: `Name`,
  genre: `film Genre`,
  date: 1993,
  coverBackground: `https://placeimg.com/1300/512/nature`,
  poster: `img/snatch.jpg`,
  picture: `img/snatch.jpg`,
  id: 123456,
  description: `Place to describe the movie`,
  rating: 8.9,
  scores: 240,
  director: `Director Name`,
  starring: [`Author`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  filmDurationTime: 107,
  videoUrl: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  isFavorite: false,
  backgroundColor: `#FFFFFF`,
};

export const films: Array<FilmType> = [
  {
    title: `Name`,
    genre: `Genre`,
    date: 2014,
    coverBackground: `https://placeimg.com/1300/512/nature`,
    poster: `img/snatch.jpg`,
    picture: `img/snatch.jpg`,
    id: 123465,
    description: `Place to describe the movie`,
    rating: 8.3,
    scores: 1500,
    director: `Director Name`,
    starring: [`Author`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
    filmDurationTime: 107,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
    isFavorite: false,
    backgroundColor: `#FFFFFF`,
  },
  {
    title: `Name`,
    genre: `Genre`,
    date: 2014,
    coverBackground: `https://placeimg.com/1300/512/nature`,
    poster: `img/snatch.jpg`,
    picture: `img/snatch.jpg`,
    id: 123478,
    description: `film description.`,
    rating: 8.3,
    scores: 1500,
    director: `Director Name`,
    starring: [`Author`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
    filmDurationTime: 107,
    isFavorite: false,
    backgroundColor: `#FFFFFF`,
  }
];

export const activeFilm: FilmType = {
  title: `Snatch`,
  genre: `Genre`,
  date: 2014,
  coverBackground: `https://placeimg.com/1300/512/nature`,
  poster: `img/snatch.jpg`,
  picture: `img/snatch.jpg`,
  id: 123891,
  description: `film description.`,
  rating: 8.3,
  scores: 1500,
  director: `Director Name`,
  starring: [`Author`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  filmDurationTime: 107,
  videoUrl: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  isFavorite: false,
  backgroundColor: `#FFFFFF`,
};

export const reviews: Array<ReviewType> = [{
  id: 1234567891,
  user: {
    id: 1223,
    name: `Ivan Ivanov`,
  },
  rating: 8.0,
  comment: `My comment.`,
  date: `2020-07-09T10:12:45.467Z`,
},
{
  id: 1234567891,
  user: {
    id: 1223,
    name: `Ivan Ivanov`,
  },
  rating: 8.0,
  comment: `My comment`,
  date: `2020-07-09T10:12:45.467Z`,
},
{
  id: 1234567891,
  user: {
    id: 1223,
    name: `Ivan Ivanov`,
  },
  rating: 8.0,
  comment: `My comment`,
  date: `2020-07-09T10:12:45.467Z`,
}];

export const genres: Array<string> = [
  `All genres`,
  `Drama`,
  `Thriller`,
  `Comedy`
];
