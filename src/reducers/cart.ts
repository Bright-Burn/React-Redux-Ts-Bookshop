import {booksType} from "../types/booksType";
import {ActionsType} from "../types/types";
import produce, {Draft} from "immer"

export type initialStateType = {
    booksInCart: booksType[],
    booksInCartIds: number[],
    shoppingList: booksType[][],
    isbuttonDisabled: boolean,
    promoCode: string
}
const initialState: initialStateType = {
    booksInCart: [],
    booksInCartIds: [],
    shoppingList: [],
    isbuttonDisabled: true,
    promoCode: ''
};

export default (state: initialStateType = initialState, action: ActionsType): initialStateType =>
    produce(state, (draft: Draft<initialStateType>) => {
        switch (action.type) {

            case 'ADD_TO_CART':
                draft.booksInCart.push(action.payload)
                draft.booksInCartIds.push(action.payload.id)
                break;

            case 'REMOVE_FROM_CART':
                draft.booksInCart.splice(draft.booksInCart.findIndex(book => book.id === action.payload), 1);
                // // Находим в корзине по индексу нужный элемент --> вырезаем с помощью splice
                draft.booksInCartIds.splice(draft.booksInCartIds.indexOf(action.payload), 1)
                // // Так же удаляем из массива с индексами этот элемент
                break;

            case 'ADD_TO_SHOPPING_LIST':
                draft.shoppingList.push(draft.booksInCart)
                draft.booksInCart = []
                draft.booksInCartIds = []
                draft.isbuttonDisabled = true
                break;

            case 'ADD_PROMO_CODE':
                draft.promoCode = action.payload
                break;

            case 'CHECK_PROMO_CODE':
                if (draft.promoCode === 'DISCOUNT') {
                    draft.booksInCart = draft.booksInCart.map(item => ({...item, price: item.price * 0.5}));
                    draft.isbuttonDisabled = draft.isbuttonDisabled = false;
                }
                break;
        }
    })

