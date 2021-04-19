class Media {
    constructor(author, title, isCheckedOut){
        this._author = author;
        this._title = title;
        this._isCheckedOut = isCheckedOut;
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

};

class Movie extends Media{

};

class CD extends Media{

};
/*
const Book {
    author: '',
    title: '',
    pages: 44,
    isCheckedOut: false,
    ratings: []
    
    };

const Movie {
    director: '',
    title: '',
    runTime: 67,
    isCheckedOut: false,
    ratings: []

};

const CD {
    artist: '',
    title: '',
    isCheckedOut: false,
    ratings: [],
    songs: ['']
};
*/