

export class Genre {

    constructor(genre) {
        this.id = genre.id;
        this.name = genre.name;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    update(book) {
        this.name = book.name;
    }
}


export class GenreList {

    constructor(genres) {
        this.genres = genres;
    }

    addGenre(genre) {
        if (!this.genres.find(x => x.name === genre.name)) {
            if (this.genres.length > 0) {
                genre.id = this.genres[this.genres.length - 1].id + 1;
            }
            else {
                genre.id = 0
            }
            this.genres.push(genre);
            return genre;
        }
    }

    getGenre(id) {
        return this.genres.find(x => x.id == id);
    }

    editGenre(genre) {

        for (var i in this.genres) {
            if (this.genres[i].getId() === genre.id) {
                this.genres[i].update(genre)
            }
        }
    }

    deleteGenre(id) {
        var genre = this.genres.find(genre => genre.id == id)
        var index = this.genres.indexOf(genre)
        if (index !== -1) this.genres.splice(index, 1);
    }
}