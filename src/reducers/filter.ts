import {ActionsType} from "../types/types";
import produce, {Draft} from "immer"


type initialStateType = {
    searchQuery: string,
    filterBy: string
}
const initialState: initialStateType = {
    searchQuery: '',
    filterBy: 'all',
};

export default (state: initialStateType = initialState, action: ActionsType) =>
    produce(state, (draft: Draft<initialStateType>) => {

        switch (action.type) {
            case 'SET_QUERY':
                draft.searchQuery = action.payload
                break;

            case 'SET_FILTER':
                draft.filterBy = action.payload
                break;

        }
    });
