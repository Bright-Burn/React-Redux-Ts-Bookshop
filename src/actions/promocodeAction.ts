import {ActionsType, ADD_PROMO_CODE, CHECK_PROMO_CODE} from "../types/types";

export const promoCode = (promoCodeValue: string): ActionsType => ({
    type: ADD_PROMO_CODE,
    payload: promoCodeValue,
});


export const checkPromoCode = ():ActionsType  => ({
    type: CHECK_PROMO_CODE,
})
export type promoCodeActionsType = {
     promoCode: typeof promoCode
     checkPromoCode: typeof checkPromoCode
 }