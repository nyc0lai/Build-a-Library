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
    
    get ratings() {
        return this._ratings;
    }
    
    getAverageRating() {
        if(this.ratings.length === 0)
        return `has not been evaluated`; else
        return this.ratings.reduce((num1, num2) => num1+num2)/this.ratings.length.toFixed(2);
        }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this.isCheckedOut;
    }

    addRating(val) {
        if(typeof val !== 'number')
        return `Enter a number`;
        else
        this._ratings.push(val);
        
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
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
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
const film1 = new Movie ('Director', 'Title', 90);
film1.addRating(7);
film1.addRating(9);
film1.addRating(3);
film1.getAverageRating();
console.log(film1);

// enter data in this format: ('artist', ['song1', 'song2', ... 'song n'], title);
const cd1 = new CD ('Dan Balad',['Dragostea din tei', 'foaie verde', 'chiperi iute'], 'Muzica de estrada anii 90');
console.log(cd1);