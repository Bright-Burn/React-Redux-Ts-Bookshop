import {booksType} from "./booksType";

export const SET_BOOKS = 'SET_BOOKS'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const TOGGLE_THE_CART = 'TOGGLE_THE_CART'
export const SET_FILTER = 'SET_FILTER'
export const ADD_TO_SHOPPING_LIST = 'ADD_TO_SHOPPING_LIST'
export const SET_QUERY = 'SET_QUERY'
export const CHECK_PROMO_CODE = 'CHECK_PROMO_CODE'
export const ADD_PROMO_CODE = 'ADD_PROMO_CODE'

type booksActionType = {
    type: typeof SET_BOOKS;
    payload: booksType[]
}

type removeFromCartActionType = {
    type: typeof REMOVE_FROM_CART
    payload: number
}

type addToCartActionType = {
    type: typeof ADD_TO_CART
    payload: booksType
}

type toggleTheCartActionType = {
    type: typeof TOGGLE_THE_CART
}

type addToShoppingListActionType = {
    type: typeof ADD_TO_SHOPPING_LIST
}

type  setFilterActionType = {
    type: typeof SET_FILTER
    payload: string
}

type setSearchQueryActionType = {
    type: typeof SET_QUERY
    payload: string
}

type promoCodeActionType = {
    type: typeof ADD_PROMO_CODE
    payload: string
}

type checkPromoCodeType = {
    type: typeof CHECK_PROMO_CODE
}

export type ActionsType = addToCartActionType |
    removeFromCartActionType |
    toggleTheCartActionType |
    addToShoppingListActionType |
    booksActionType |
    setFilterActionType |
    setSearchQueryActionType |
    promoCodeActionType |
    checkPromoCodeType