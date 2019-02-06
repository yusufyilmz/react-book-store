import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NO_CHANGE_MESSAGE } from '../constants/messages';
import { fetchGenres, deleteGenre, getGenre, editGenre, createGenre } from '../actions';

class GenreContainer extends Component {

    state = {
        name: '',
    }

    componentDidMount() {

        if (this.props.operation === 'edit') {
            this.props.getGenre(this.props.id);
        }

        if (this.props.operation === 'delete') {
            this.props.deleteGenre(this.props.id);
        }

        if (this.props.operation === 'create') {
            this.props.getGenre(this.props.id);
        }

        if (this.props.operation === 'list') {
            this.props.fetchGenres();
        }
        // if (this.props.genres.length === 0) {
        //     this.props.fetchGenres();
        // }
        // else {
        //     this.props.resetGenreState();
        // }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.genre !== this.props.genre && this.props.genre) {
            this.setState({
                name: this.props.genre.name,
                id: this.props.genre.id,
            })
        }
    }

    createGenre = (e) => {
        e.preventDefault();
        this.props.createGenre(this.state);
    }

    editGenre = (e) => {
        e.preventDefault();
        if (this.props.genre.name !== this.state.name) {
            this.props.editGenre(this.state);
        }
        else{
            this.setState({showPopup: true, popupMessage: NO_CHANGE_MESSAGE })
        }
    }

    changeName = (e) => {
        const name = e.target.value;
        this.setState(() => ({
            name
        }));
    }

    getStateAndHelpers() {
        return {
            genres: this.props.genres,
            deleteGenre: this.deleteGenre,
            editGenre: this.editGenre,
            createGenre: this.createGenre,
            name: this.state.name,
            changeName: this.changeName,
            createSuccess: this.props.createSuccess,
            editSuccess: this.props.editSuccess,
            deleteSuccess: this.props.deleteSuccess,
            showPopup: this.state.showPopup,
            popupMessage: this.state.popupMessage,
            error: this.props.error,
            loading: this.props.loading,
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        genres: state.genre.items,
        genre: state.genre.item,
        deleteSuccess: state.genre.deleteSuccess,
        editSuccess: state.genre.editSuccess,
        createSuccess: state.genre.createSuccess,
        loading: state.loader.loading,
        error: state.error.error

    }
}

export default connect(mapStateToProps, {
    fetchGenres,
    deleteGenre,
    editGenre,
    createGenre,
    getGenre
})(GenreContainer);
