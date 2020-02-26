import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";

import * as cartActions from '../actions/cart';
import * as promocodeActions from '../actions/promocodeAction';
import CartModule from "../components/CartModule/CartModule";
import uniqBy from 'lodash/uniqBy';
import {booksType} from "../types/booksType";
import {ActionsType} from "../types/types";
import {promoCodeActionsType} from "../actions/promocodeAction";
import {cartActionsType} from "../actions/cart";

type mapStateToPropsType = {
    cart: { booksInCart: booksType[], promoCode: string, isbuttonDisabled: boolean }
}

const mapStateToProps = ({cart: {booksInCart, promoCode, isbuttonDisabled}}: mapStateToPropsType) => ({
    CartItems: uniqBy(booksInCart, item => item.id),
    totalPrice: booksInCart.reduce((total, book) => total + book.price, 0),
    CheckPromoCode: promoCode,
    isbuttonDisabled: isbuttonDisabled
});


const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): promoCodeActionsType & cartActionsType => ({
    ...bindActionCreators(cartActions, dispatch),
    ...bindActionCreators(promocodeActions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(CartModule);
