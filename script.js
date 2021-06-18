"use strict";

// alert('Hello')

// const result = confirm('Are you here?')
// console.log(result)



// const answer = prompt('Вам есть 18?', '');
// console.log(answer)

// const answers = [];

// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your last name?", "");
// answers[2] = prompt("How old are you?", "");

// console.log(typeof(answers));

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);
// console.log(5%2);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 const a = prompt('Один из последних просмотреный фильмов', ''),
       b = prompt('На сколько оцените его?', ''),
       c = prompt('Один из последних просмотреный фильмов', ''),
       d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);