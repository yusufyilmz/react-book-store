import React, { Fragment } from 'react';
import { BookList } from '../Book/BookList';
import { CreateBook } from '../Book/CreateBook';
import { EditBook } from '../Book/EditBook';
import { GenreList } from '../Genre/GenreList';
import { CreateGenre } from '../Genre/CreateGenre';
import { EditGenre } from '../Genre/EditGenre';
import { Switch, Route } from 'react-router-dom';
import { DeleteBook } from '../Book/DeleteBook';
import { DeleteGenre } from '../Genre/DeleteGenre';
import { Div } from './style';

export const Content = () => {
        return (
                <Div>
                        <Fragment>
                                <Switch>
                                        <Route exact path='/books' component={BookList} />
                                        <Route path='/books/create' component={CreateBook} />
                                        <Route path='/books/edit/:id' component={EditBook} />
                                        <Route path='/books/delete/:id' component={DeleteBook} />
                                        <Route exact path='/genres' component={GenreList} />
                                        <Route path='/genres/create' component={CreateGenre} />
                                        <Route path='/genres/edit/:id' component={EditGenre} />
                                        <Route path='/genres/delete/:id' component={DeleteGenre} />
                                </Switch>
                        </Fragment>
                </Div>
        );
}