const numberOfFilms = prompt("Сколько ви фильмов посмотрели?","");
//console.log(numberOfFilms);
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false 
};

const a = prompt("Один из последних просмотренних фильмов?",""),
      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних просмотренних фильмов?",""),
      d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);