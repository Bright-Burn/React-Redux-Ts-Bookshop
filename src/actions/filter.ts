import {ActionsType, SET_FILTER, SET_QUERY} from "../types/types";

export const setFilter = (filter: string): ActionsType => ({
    type: SET_FILTER,
    payload: filter,
});

export const setSearchQuery = (value: string): ActionsType => ({
    type: SET_QUERY,
    payload: value,
});

export type filterActionsType = {
    setFilter: typeof setFilter
    setSearchQuery: typeof setSearchQuery
}