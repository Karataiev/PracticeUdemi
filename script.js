"use strict";

// Project UDEMI "lesson_1"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last wathing film?', ''),
      b = prompt('How much do you rate him?', ''),
      c = prompt('Last wathing film?', ''),
      d = prompt('how much do you rate him?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
