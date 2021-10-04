let numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
//alert(numberOfFilms);

let obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//alert(obj.count);
let lastFilm1 = prompt("Какой последний фильм вы посмотрел?", ''),
    ratingFilm1 = prompt("Как вы его оцените?", ''),
    lastFilm2 = prompt("Какой еще последний фильм вы посмотрели?", ''),
    ratingFilm2 = prompt ("Каквы его оцените?", '');

obj.movies[lastFilm1] = ratingFilm1;
obj.movies[lastFilm2] = ratingFilm2;

console.log(obj.movies);

