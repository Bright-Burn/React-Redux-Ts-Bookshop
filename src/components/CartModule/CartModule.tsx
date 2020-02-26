import React from 'react';
import {Button, Icon, Modal} from 'semantic-ui-react';

import CartInner from '../../containers/cartInner';
import "./CartModule.css";
import {booksType} from "../../types/booksType";
import {ActionsType} from "../../types/types";

type CartModuleType = {
    CartItems: booksType[]
    totalPrice: number
    addToShoppingList: () => ActionsType
    promoCode: (promoCodeValue: string) => ActionsType,
    checkPromoCode: () => ActionsType
    isbuttonDisabled: boolean,
    count: number
}
const CartModule: React.FC<CartModuleType> = ({
                                                  CartItems,
                                                  totalPrice,
                                                  addToShoppingList,
                                                  promoCode,
                                                  checkPromoCode,
                                                  isbuttonDisabled,
                                                  count
                                              }) => {
    return (
        <Modal trigger={<Button>
            <Icon name='shop'/>
            Корзина (<b>{count}</b>)
        </Button>}>

            <Modal.Header>Ваша корзина</Modal.Header>
            {CartItems.map(item => <CartInner key={item.id + 10} item={item}/>)}
            <hr/>

            <div className="cart__module__container">
                <div className='cart__total'>
                    <div className="cart__total__title">Итого :</div>
                    <div className="cart__total__value">{totalPrice} <Icon name='rub'/></div>
                </div>

                <hr/>

                <div className="get__shopping__list">
                    <Button onClick={addToShoppingList}>Купить</Button>
                </div>

                <hr/>

                <div className="cart_promo__code">
                    <div>
                        <input className='promo__input' onChange={(e) => promoCode(e.target.value)} type="text"
                               placeholder='Введите промокод'/>
                        <Button className='promo__button' onClick={checkPromoCode}
                                disabled={!isbuttonDisabled}>Применить</Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
};


export default CartModule
