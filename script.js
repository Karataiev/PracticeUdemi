"use strict";

// Project UDEMI "lesson_1"

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
    const a = prompt('Last wathing film?', ''),
          b = prompt('How much do you rate him?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log("done");
    } else {
        console.log('error');
        i--;
    }           
  }
}

// rememberMyFilms();

function detectPErsonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотрено мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    }else if(personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    }else{
        console.log('Error');
    }
}

// detectPErsonalLevel();



function showMyDB(){
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB()

function writeYourGenres(){
    for( let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
}

writeYourGenres()



// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// . Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно
