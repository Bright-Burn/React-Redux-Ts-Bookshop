import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";

import * as filterActions from '../actions/filter';
import Filter from "../components/Filter/Filter";
import {ActionsType} from "../types/types";
import {filterActionsType} from "../actions/filter";

const mapStateToProps = ({filter: {filterBy, searchQuery}}: { filter: { filterBy: string, searchQuery: string } }) => ({
    filterBy: filterBy,
    searchQuery: searchQuery,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): filterActionsType => ({
    ...bindActionCreators(filterActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
