import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";

import * as booksActions from '../actions/books';
import App from '../components/App/App';
import {ActionsType} from "../types/types";

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => ({
    ...bindActionCreators(booksActions, dispatch),
});


export default connect(null, mapDispatchToProps)(App);