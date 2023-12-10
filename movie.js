class Movie{
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies){
        return movies.filter(movie => movie.rating === "PG")
    }
}

// creating an instance of the movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Production", "PG-13");