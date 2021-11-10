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



