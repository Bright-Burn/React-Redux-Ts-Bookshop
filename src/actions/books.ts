import {booksType} from "../types/booksType";
import {ActionsType, SET_BOOKS} from "../types/types";
import {Dispatch} from "redux";
import axios from "axios";

export const setBooks = (books: booksType[]):ActionsType => ({
    type: SET_BOOKS,
    payload: books
})

export type setBooksActionType = {setBooks: typeof setBooks }

export const getBookThunk = () => (dispatch: Dispatch<ActionsType>) => {

    axios.get('./books.json').then(
        ({data}) => dispatch(setBooks(data))
    );
}