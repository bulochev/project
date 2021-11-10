let obj = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    detectRightNumber() {
        this.count = prompt("Сколько фильмов вы посмотрели?");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = prompt("Сколько фильмов вы посмотрели?");
        }
    },
    whoIAm() {
        if (this.count < 10) {
            alert('Вы посмотрели довольно мало фильмов!');
        }
        else if (this.count <= 30 && this.count >= 10) {
            alert('Вы классический зритель');
        }
        else if (this.count > 30) {
            alert('Вы киноман!');
        }
        else {
            alert('Ошибка!');
        }
    },
    showMyDB() {
        if (this.privat == false) {
            console.log(obj);
        }
    },
    writeMyGenres() {
        for (let i = 0; i < 3; i++) {
            this.genres[i] = prompt("Ваш " + (+i+1) + "-й любимый жанр?");
            if (this.genres[i] == '' || this.genres[i] == null || this.genres[i] == undefined) {
                i--;
            }
        }
        this.genres.forEach(curElement => {
           console.log(`Любимый жанр № ${this.genres.indexOf(curElement) + 1} - это ${curElement}`);
        });
    },
    directMyFilms() {
        for (let i=0; i<3; i++) {
            let tempFilmName = prompt('Один из последних просмотренных фильмов?');
            let tempFilmRating = prompt("Как вы его оцените?");
            if (tempFilmName != null && tempFilmName.length <=50 && tempFilmName != '' && tempFilmRating != '') {
                this.movies[tempFilmName] = tempFilmRating;
            }
            else {
                i--;
            }
        }
    },
    toggleVisibleMyDB() {
        if (this.privat) {
        this.privat = false;
        } else {
        this.privat = true;
        }
    }
};

obj.detectRightNumber();
obj.whoIAm();
obj.directMyFilms();
obj.writeMyGenres();
obj.toggleVisibleMyDB();
obj.showMyDB();


