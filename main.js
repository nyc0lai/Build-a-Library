//superclass
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
        return `has not been evaluated`;
        return (this.ratings.reduce((num1, num2) => num1+num2)/this.ratings.length).toFixed(2);
        }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    addRating(rate) {
        this.ratings = rate;    
    }

    checkOut () {
        if(this.isCheckedOut)
        return 'Yes';
        return 'No';

    }

};
//subclasses Book
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
//subclasses Movie
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
const movie1 = new Movie ('Tim Story', 'Tom & Jerry', 101, 'https://ultramovies.net/titles/21751/tom-and-jerry');
movie1.addRating(7);
movie1.addRating(9);
movie1.addRating(3);

const movie2 = new Movie ('Patty Jenkins', 'Wonder Woman 1984 ', 151, 'https://ultramovies.net/titles/1404/wonder-woman-1984');
movie2.toggleCheckOutStatus();

function movieResult(movie){
    console.log(`Title: ${movie.title}\nDirector: ${movie.director}\nRunning Time: ${movie.runTime} mins.
Rating: ${movie.getAverageRating()}\nLink: ${movie.link}\nVerified: ${movie.checkOut()}`);
};

movieResult(movie1);
movieResult(movie2);

// enter data in this format: ('artist', ['song1', 'song2', ... 'song n'], title);

//I'm a tired
