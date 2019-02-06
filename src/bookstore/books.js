export class Book {

    constructor(book) {
        this.id = book.id;
        this.name = book.name;
        this.genre = book.genre;
        this.price = book.price;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getGenre() {
        return this.genre
    }

    update(book) {
        this.name = book.name;
        this.price = book.price;
        this.genre = book.genre;

    }
}

export class BookList {

    constructor(books) {
        this.books = books;
    }

    addBook(book) {
        if (!this.books.find(x => x.name === book.name)) {

            if (this.books.length > 0) {
                book.id = this.books[this.books.length - 1].id + 1;
            }
            else {
                book.id = 0
            }
            this.books.push(book);
            return book;
        }
    }

    editBook(book) {

        for (var i in this.books) {
            if (this.books[i].getId() === book.id) {
                this.books[i].update(book)
            }
        }
    }

    deleteBook(id) {
        var book = this.books.find(book => book.id == id)
        var index = this.books.indexOf(book)
        if (index !== -1) this.books.splice(index, 1);
    }
}