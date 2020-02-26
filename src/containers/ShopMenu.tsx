import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import * as cartActions from '../actions/cart';
import {booksType} from "../types/booksType";
import {ActionsType} from "../types/types";
import {ShopMenu} from "../components/ShopMenu/ShopMenu";
import {cartActionsType} from "../actions/cart";

type mapStateToPropsType = {
    cart: { booksInCart: booksType[] }
}

const mapStateToProps = ({cart: {booksInCart}}: mapStateToPropsType) => ({
    totalPrice: booksInCart.reduce((total, book) => total + book.price, 0),
    count: booksInCart.length,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): cartActionsType => ({
    ...bindActionCreators(cartActions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopMenu);
