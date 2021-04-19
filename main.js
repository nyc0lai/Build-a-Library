class Media {
    constructor(title, isCheckedOut, ratings){
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get author() {
        return this._author;
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    getAverageRating() {

    }

    toggleCheckOutStatus() {

    }

    addRating() {

    }

};

class Book extends Media {
    constructor(author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._author = author;
        this._pages = pages;
    }

};

class Movie extends Media{
    constructor(director, title, runTime, isCheckedOut, ratings){
        super(title, isCheckedOut, ratings);
        this._director = director;
        this,_runTime = runTime;
    }

};

class CD extends Media{
    constructor(artist, title, isCheckedOut, ratings, songs){
        super(title, isCheckedOut, ratings);
        this._artist = artist;
        this._songs = songs;
    }

};

