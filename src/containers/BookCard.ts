import {connect} from 'react-redux';
import { bindActionCreators, Dispatch} from "redux";

import * as cartActions from '../actions/cart';
import BookCard from "../components/BookCard/BookCard";
import {initialStateType} from "../reducers/cart";
import {ActionsType} from "../types/types";
import {cartActionsType} from "../actions/cart";

type StateType = {
    cart: initialStateType
}
type ownPropsType = {
    id: number
}

const mapStateToProps = ({cart}: StateType, {id}: ownPropsType) => ({
    addedCount: cart.booksInCart.reduce((count, book) => count + (book.id === id ? 1 : 0), 0)
});


const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): cartActionsType => ({
    ...bindActionCreators(cartActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
