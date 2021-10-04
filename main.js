let numberOfFilms;

function detectRightNumber (){
    numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
    }
}

let obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (obj.privat == false) {
        console.log(obj);
    }
}

function writeMyGenres() {
    for (let i=0; i<3; i++) {
       obj.genres[i] = prompt("Ваш " + (+i+1) + "-й любимый жанр?");
    }
}
detectRightNumber();
if (obj.count < 10) {
    alert('Вы посмотрели довольно мало фильмов!');
}
else if (obj.count <= 30 && obj.count >= 10) {
    alert('Вы классический зритель');
}
else if (obj.count > 30) {
    alert('Вы киноман!');
}
else {
    alert('Ошибка!');
}
directMyFilms();
writeMyGenres();

function directMyFilms() {
    for (let i=0; i<3; i++) {
        let tempFilmName = prompt('Один из последниХ просмотренных фильмов?');
        let tempFilmRating = prompt("Как вы его оцените?");
        if (tempFilmName != null && tempFilmName.length <=50 && tempFilmName != '' && tempFilmRating != '') {
            obj.movies[tempFilmName] = tempFilmRating;
        }
        else {
            i--;
        }
    }
}



/*for (let i=0; i<3; i++) {
    let tempFilmName = prompt('Один из последниз просмотренных фильмов?');
    if (tempFilmName == null) {
        i--;
    }
    else if (tempFilmName.length > 50 || tempFilmName.length == 0){
        i--;
    }
    else {
        let tempFilmRating = prompt("Как вы его оцените?");
        obj.movies[tempFilmName] = tempFilmRating;
    }
}*/
console.log(obj);
/*let i=0;
do {
    let tempFilmName = prompt('Один из последних просмотренных фильмов?')
    if (tempFilmName.length < 50 && tempFilmName.length != 0 && tempFilmName != null) {
        let tempFilmRating = prompt('Как вы его оцените?');
        obj.movies[tempFilmName] = tempFilmRating;
        i++;
    }
}
while (i<3);
console.log(obj.movies);*/



//alert(obj.count);
/*let lastFilm1 = prompt("Какой последний фильм вы посмотрели?", ''),
    ratingFilm1 = prompt("Как вы его оцените?", ''),
    lastFilm2 = prompt("Какой еще последний фильм вы посмотрели?", ''),
    ratingFilm2 = prompt ("Каквы его оцените?", '');*/


/*obj.movies[lastFilm1] = ratingFilm1;
obj.movies[lastFilm2] = ratingFilm2;*/

