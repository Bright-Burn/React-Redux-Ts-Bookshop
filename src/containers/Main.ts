import {connect} from 'react-redux';
import orderBy from 'lodash/orderBy';

import {booksType} from "../types/booksType";
import {Main} from "../components/Main/Main";


type sortByType = (books: booksType[], filterBy: string) => booksType[]
const sortBy: sortByType = (books, filterBy) => {

    switch (filterBy) {
        case 'all':
            return books;

        case 'price_high':
            return orderBy(books, 'price', 'desc');

        case 'price_low':
            return orderBy(books, 'price', 'asc');

        case 'author':
            return orderBy(books, 'author', 'asc');

        default:
            return books;

    }

};

type filterBooks = (books: booksType[], searchQuery: string) => booksType[]
const filterBooks: filterBooks = (books, searchQuery) =>
    books.filter(
        item =>
            item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            item.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
type searchBooksType = (books: booksType[], filterBy: string, searchQuery: string) => booksType[]

const searchBooks: searchBooksType = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy);
};

type mapStateToPropsType = {
    books: { books: booksType[], isReady: boolean }
    filter: { filterBy: string, searchQuery: string }
}


const mapStateToProps = ({books: {books, isReady}, filter: {filterBy, searchQuery}}: mapStateToPropsType) => ({
    books: books && searchBooks(books, filterBy, searchQuery),
    isReady,
});


export default connect(mapStateToProps)(Main);