import React from 'react';
import {Card} from "semantic-ui-react";
import BookCard from "../../containers/BookCard";
import {booksType} from "../../types/booksType";

interface Props {
    books: booksType[]
    isReady: boolean
}

export const Main: React.FC<Props> = ({books, isReady}) => {
    return (
        <div>
            <Card.Group itemsPerRow={4}>
                {!isReady ? 'Загрузка..' : books.map((item, index) => (
                    <BookCard key={index} id={item.id} book={item}/>))}
            </Card.Group>
        </div>
    );
};

