import {ActionsType} from "../types/types";
import {booksType} from "../types/booksType";
import produce, {Draft} from "immer"

type initialStateType = {
    isReady: boolean,
    books: booksType[],
}

const initialState: initialStateType = {
    isReady: false,
    books: [] as booksType[],
};

export default (state: initialStateType = initialState, action: ActionsType): initialStateType =>
    produce(state, (draft: Draft<initialStateType>) => {
            switch (action.type) {
                case 'SET_BOOKS':
                    draft.books = action.payload
                    draft.isReady = true
                    break;
            }
        }
    )
