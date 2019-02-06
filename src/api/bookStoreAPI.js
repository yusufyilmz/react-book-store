import { Server } from 'react-mock'
import Books from './books.json';
import Genres from './genres.json';
import { BookList, Book } from '../bookstore/books.js';
import { GenreList, Genre } from '../bookstore/genres.js';

var bookList = [];
var genreList = [];
const booksEndPoint = '/api/v1/books'
const genresEndPoint = '/api/v1/genres'

const initializeBookStore = () => {

  console.log('initializeBookStore')
  genreList = new GenreList(Genres.map(genre => {
    return new Genre(genre);
  }));

  bookList = new BookList(Books.map(book => {
    book.genre = genreList.getGenre(book.genreId)
    return new Book(book);
  }));

}


const fetchBooks = () => {

  try {
    return {
      status: 'OK',
      data: bookList
    }
  } catch (e) {
    console.log(e)

    return {
      status: 'ERROR',
      data: e.message
    }
  }
}


const createBook = (request) => {

  try {
    var body = JSON.parse(request.requestBody)
    var book = new Book(body.book);
    console.log(body)
    book.genre = genreList.getGenre(body.book.genre);
    bookList.addBook(book);
    return {
      status: 'OK',
      data: bookList
    }
  } catch (e) {
    console.log(e)

    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const editBook = (request) => {

  try {
    var body = JSON.parse(request.requestBody)
    var book = new Book(body.book);
    console.log(body)
    book.genre = genreList.getGenre(body.book.genre.id);
    console.log(book)
    bookList.editBook(book);
    return {
      status: 'OK',
      data: bookList
    }
  } catch (e) {
    console.log(e)

    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const deleteBook = (request) => {

  try {
    var id = JSON.parse(request.requestBody)
    bookList.deleteBook(id);

    return {
      status: 'OK',
      data: bookList
    }

  } catch (e) {

    console.log(e)
    return {
      status: 'ERROR',
      data: e.message
    }
  }
}


const fetchGenres = () => {

  try {
    return {
      status: 'OK',
      data: genreList
    }
  } catch (e) {
    return {
      status: 'ERROR',
      data: e.message
    }
  }
}



const createGenre = (request) => {

  try {
    var body = JSON.parse(request.requestBody)
    console.log(body)
    var genre = new Genre(body.genre);
    genreList.addGenre(genre);
    return {
      status: 'OK',
      data: genreList
    }
  } catch (e) {
    console.log(e)

    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const editGenre = (request) => {

  try {
    var body = JSON.parse(request.requestBody)
    var genre = new Genre(body.genre);
    genreList.editGenre(genre);
    return {
      status: 'OK',
      data: genreList
    }
  } catch (e) {
    console.log(e)

    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const deleteGenre = (request) => {

  try {
    var id = JSON.parse(request.requestBody)
    genreList.deleteGenre(id);

    return {
      status: 'OK',
    }

  } catch (e) {

    console.log(e)
    return {
      status: 'ERROR',
      data: e.message
    }
  }
}




initializeBookStore();


function delay(t, v) {
  return new Promise(function(resolve) { 
      setTimeout(resolve.bind(null, v), t)
  });
}

const requestBooksHandler = async (request, generator) => {

 return delay(1000, [200, { 'Content-Type': 'application/json' }, JSON.stringify(fetchBooks())])
  
}

const requestBookCreateHandler = async (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(createBook(request))];
}


const requestBookEditHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(editBook(request))];
}

const requestBookDeleteHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(deleteBook(request))];
}



const requestGenresHandler = (request, generator) => {
 return delay(1000, [200, { 'Content-Type': 'application/json' }, JSON.stringify(fetchGenres())])

}

const requestGenresCreateHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(createGenre(request))];
}


const requestGenresEditHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(editGenre(request))];
}

const requestGenresDeleteHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(deleteGenre(request))];
}


Server.mockGet(booksEndPoint, requestBooksHandler)
Server.mockPost(booksEndPoint, requestBookCreateHandler)
Server.mockPut(booksEndPoint, requestBookEditHandler)
Server.mockDelete(booksEndPoint, requestBookDeleteHandler)

Server.mockGet(genresEndPoint, requestGenresHandler)
Server.mockPost(genresEndPoint, requestGenresCreateHandler)
Server.mockPut(genresEndPoint, requestGenresEditHandler)
Server.mockDelete(genresEndPoint, requestGenresDeleteHandler)


Server.on()