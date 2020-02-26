import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";

import * as cartActions from '../actions/cart';
import CartInner from "../components/CartModule/CartInner/CartInner";
import {ActionsType} from "../types/types";
import {cartActionsType} from "../actions/cart";

type mapStateToPropsType = {
    cart: { booksInCartIds: number[] }
}

const mapStateToProps = ({cart: {booksInCartIds}}: mapStateToPropsType) => ({
    booksInCartIds: booksInCartIds

});


const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): cartActionsType => ({
    ...bindActionCreators(cartActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CartInner);
