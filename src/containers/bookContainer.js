import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, fetchGenres, deleteBook, editBook, createBook, getBook } from '../actions';
import { NO_CHANGE_MESSAGE } from '../constants/messages';

class BookContainer extends Component {

    state = {
        name: '',
        price: '',
        genre: undefined
    }

    componentWillMount() {
        this.props.fetchGenres();
    }

    componentDidMount() {

        if (this.props.operation === 'edit') {
            this.props.getBook(this.props.id);
        }

        if (this.props.operation === 'create') {
            // this.props.fetchGenres();
        }

        if (this.props.operation === 'delete') {
            this.props.deleteBook(this.props.id)
        }

        if (this.props.operation === 'list') {
            this.props.fetchBooks();
        }
    }

    componentDidUpdate(prevProps) {

        if (this.props.operation === 'edit' && prevProps.book !== this.props.book && this.props.book) {
            this.setState({
                name: this.props.book.name,
                id: this.props.book.id,
                genre: this.props.book.genre.id,
                price: this.props.book.price,
            })
        }

        if (this.props.operation === 'create' && prevProps.genres !== this.props.genres && this.props.genres) {
            this.setState({
                genre: this.props.genres.length > 0 && this.props.genres[0].id

            })
        }
    }

    onChange = (key, e) => {
        const value = e.target.value;
        this.setState(() => ({
            [key]: value
        }));
    }

    createBook = (e) => {
        e.preventDefault();
        this.props.createBook(this.state);
    }

    editBook = (e) => {
        e.preventDefault();
        if (this.props.book.name !== this.state.name
            || this.props.book.genre.id !== this.state.genre
            || this.props.book.price !== this.state.price) {
            var genre = this.props.genres.find(x => x.id == this.state.genre)
            this.props.editBook({ ...this.state, genre: genre });
        }
        else {
            this.setState({ showPopup: true, popupMessage: NO_CHANGE_MESSAGE })
        }
    }

    getStateAndHelpers() {
        return {
            books: this.props.books,
            deleteBook: this.deleteBook,
            createBook: this.createBook,
            editBook: this.editBook,
            handleChange: this.onChange,
            name: this.state.name,
            price: this.state.price,
            genre: this.state.genre,
            genres: this.props.genres,
            createSuccess: this.props.createSuccess,
            editSuccess: this.props.editSuccess,
            deleteSuccess: this.props.deleteSuccess,
            showPopup: this.state.showPopup,
            popupMessage: this.state.popupMessage,
            loading: this.props.loading,
            error: this.props.error,
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        books: state.book.items,
        loading: state.loader.loading,
        error: state.error.error,
        book: state.book.item,
        genres: state.genre.items,
        editSuccess: state.book.editSuccess,
        createSuccess: state.book.createSuccess,
        deleteSuccess: state.book.deleteSuccess,
    }
}

export default connect(mapStateToProps, {
    fetchBooks,
    fetchGenres,
    deleteBook,
    editBook,
    createBook,
    getBook
})(BookContainer);

