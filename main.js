class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(value){
        this._isCheckedOut = value;
    }
    
    get ratings() {
        return this._ratings;
    }
    
    set ratings(value){
        if(typeof value ==='number')
        this.ratings.push(value);
        else
        console.log('Enter only number');
    }
    getAverageRating() {
        if(this.ratings.length === 0)
        return `has not been evaluated`; else {
        return (this.ratings.reduce((num1, num2) => num1+num2)/this.ratings.length).toFixed(2);
            }
        }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    addRating(rate) {
        this.ratings = rate;    
    }

};

class Book extends Media {
    constructor(author, pages, title) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

};

class Movie extends Media{
    constructor(director, title, runTime, link){
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._link = link;
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
    get link() {
        return this._link;
    }

};

class CD extends Media{
    constructor(artist, songs, title){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }

};

// enter data in this format: ('director', 'title', run hours in minute ex: 120);
const film1 = new Movie ('Tim Story', 'Tom & Jerry', 101, 'https://ultramovies.net/titles/21751/tom-and-jerry');
film1.addRating(7);
film1.addRating(9);
film1.addRating(3);
film1.getAverageRating();

const film2 = new Movie ('Patty Jenkins', 'Wonder Woman 1984 ', 151, 'https://ultramovies.net/titles/1404/wonder-woman-1984');
film1.getAverageRating();

function movieResult(film){
    console.log(`Title: ${film.title}\nDirector: ${film.director}\nRunning Time: ${film.runTime} mins.
Rating: ${film.getAverageRating()}\nLink: ${film.link}`);
};

movieResult(film1);
movieResult(film2);

// enter data in this format: ('artist', ['song1', 'song2', ... 'song n'], title);

//I'm a tired
