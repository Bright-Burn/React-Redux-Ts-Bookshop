import React from 'react'
import {Button, Icon, Image, Modal} from 'semantic-ui-react'

import './ShoppingList.css'
import {booksType} from "../../types/booksType";

type shoppingListInner = {
    title: string
    author: string
    image: string
}

const shoppingListInner = ({title, author, image}: shoppingListInner) => {
    return (
        <div key={Math.random() + 1} className='shopping__list__order__item '>
            <Modal.Content image>
                <Image
                    wrapped
                    size='small'
                    src={image}
                />
                <Icon name='checkmark'/> {title} - {author}
            </Modal.Content>
        </div>
    )
};


const shoppingLisOuter = (item: booksType[], index: number) => {
    console.log(item)
    return (
        <div key={Math.random() + 2} className='shopping__list_each__order'>
            <div className='shopping__list__title'>
                <b>Заказ №: &nbsp; </b>
                {++index}
            </div>
            <div className='shopping__list__order__items'>
                {item.map(itemInner => shoppingListInner(itemInner))}
            </div>
            <div className='shopping__list__total'>
                <b>Итого</b>:&nbsp; {item.reduce((total, book) => total + book.price, 0)} <Icon name='rub'/>
            </div>
            <hr/>

        </div>
    )
};

const shoppingList: React.FC<{ shoppingList: booksType[][] }> = ({shoppingList}) => {

    return (
        <Modal trigger={<Button>
            <Icon name='th list'/>
            Список покупок
        </Button>}>

            <Modal.Header>Ваши покупки:</Modal.Header>
            {shoppingList.map((item, index) => shoppingLisOuter(item, index))}
        </Modal>
    )
};

export default shoppingList
