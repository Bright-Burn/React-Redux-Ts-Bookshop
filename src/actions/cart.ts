import {booksType} from "../types/booksType";
import {ActionsType, ADD_TO_CART, ADD_TO_SHOPPING_LIST, REMOVE_FROM_CART, TOGGLE_THE_CART,} from "../types/types";

export const addToCart= (obj:booksType): ActionsType  => ({
    type: ADD_TO_CART,
    payload: obj,
});

export const removeFromCart= (id: number): ActionsType => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const isCartOpened = (): ActionsType => ({
    type: TOGGLE_THE_CART,
});

export const addToShoppingList= (): ActionsType => ({
    type: ADD_TO_SHOPPING_LIST,
});

export type cartActionsType ={
    addToCart: typeof addToCart
    removeFromCart: typeof removeFromCart
    isCartOpened: typeof isCartOpened
    addToShoppingList: typeof addToShoppingList
}