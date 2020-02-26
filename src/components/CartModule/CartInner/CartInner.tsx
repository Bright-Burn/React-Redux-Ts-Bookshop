import React from 'react'
import {Header, Image, Icon, Modal} from 'semantic-ui-react'

import './CartInner.css'
import {booksType} from "../../../types/booksType";
import {ActionsType} from "../../../types/types";

type CartInnerType = {
    item: booksType
    addToCart: (obj: booksType) => ActionsType
    removeFromCart: (id: number) => ActionsType
    booksInCartIds: number[]
}
const CartInner: React.FC<CartInnerType> = ({
                                                item,
                                                addToCart,
                                                removeFromCart,
                                                booksInCartIds
                                            }) => {

    const booksCount = booksInCartIds.reduce((init, current) => init + (current === item.id ? 1 : 0), 0);

    return (
        <Modal.Content image>
            <Image
                wrapped
                size='small'
                src={item.image}
            />
            <Modal.Description>
                <Header>{item.title}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut, consequatur dignissimos
                    dolor dolore dolorum fugiat labore minus nulla optio placeat qui quos ratione, reiciendis saepe
                    sequi unde vel voluptatibus.
                </p>
                <p><b>{item.author}</b></p>

                <div className="book__count">
                    Количество книг : {booksCount}
                </div>

                <div className="book__count">
                    Стоимость одной книги : {item.price} <Icon name='rub'/>
                </div>

                <div className="book__count">
                    Итого : {item.price * booksCount} <Icon name='rub'/>
                </div>

                <div className="cart__actions">
                    <button className="add__book" onClick={() => addToCart(item)}>+</button>
                    <button className="minus__book" onClick={() => removeFromCart(item.id)}>-</button>
                </div>
            </Modal.Description>

        </Modal.Content>
    )
};

export default CartInner