import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'

import {booksType} from "../../types/booksType";
import {ActionsType} from "../../types/types";
import "./BookCard.css"

type BookCardType = {
    addToCart: (obj: booksType) => ActionsType
    addedCount: number
    book: booksType

}

const BookCard: React.FC<BookCardType> = ({book, addToCart, addedCount}) => {
    const {title, author, price, image} = book

    return (
        <Card>
            <Image src={image}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                <span className='book__card__date'>
                    {author}
                </span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <span className="book__card__rub">
                    <Icon name='rub'/>
                    {price}
                </span>
            </Card.Content>
            <Button onClick={() => addToCart(book)}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    )
};

export default BookCard;