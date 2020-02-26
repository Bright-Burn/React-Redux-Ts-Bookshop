import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";

import * as cartActions from "../actions/cart";
import shoppingList from '../components/ShoppingList/ShoppingList'
import {booksType} from "../types/booksType";
import {ActionsType} from "../types/types";
import {cartActionsType} from "../actions/cart";

type mapStateToPropsType = {
    cart: { shoppingList: booksType[][] }
}
const mapStateToProps = ({cart: {shoppingList}}: mapStateToPropsType) => ({
    shoppingList: shoppingList,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): cartActionsType => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(shoppingList);

