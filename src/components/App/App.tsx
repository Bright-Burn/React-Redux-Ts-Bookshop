import React, {useEffect} from 'react';
import { Container} from 'semantic-ui-react'

import Filter from "../../containers/Filter";
import ShopMenu from "../../containers/ShopMenu";
import Main from '../../containers/Main'
import './App.css';


type appPropsType = {
    getBookThunk: () => void
}

const App: React.FC<appPropsType> = ({ getBookThunk}) => {

    useEffect(() => {
        getBookThunk()
    }, [])

    return (
        <Container>
            <ShopMenu />
            <Filter />
            <Main/>
        </Container>
    );


};

export default App;
