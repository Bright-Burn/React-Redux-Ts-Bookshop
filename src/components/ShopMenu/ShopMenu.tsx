import React from 'react';
import {Menu} from 'semantic-ui-react';

import CartModule from "../../containers/CartModule";
import ShoppingList from "../../containers/ShoppingList";

type shopMenuPropsType = {
    totalPrice: number
    count: number
}

export const ShopMenu: React.FC<shopMenuPropsType> = ({totalPrice, count}) => {

    return (
        <Menu>
            <Menu.Item
                name='browse'
            >
                Магазин книг
            </Menu.Item>

            <Menu.Menu position='right'>

                <Menu.Item>
                    <ShoppingList/>
                </Menu.Item>

                <Menu.Item
                    name='signup'
                >
                    Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.
                </Menu.Item>

                <Menu.Item>
                    <CartModule count={count}/>
                </Menu.Item>

            </Menu.Menu>
        </Menu>
    )
};
