import React from 'react'
import {Input, Menu} from 'semantic-ui-react'
import {ActionsType} from "../../types/types";

type FilterTypes = {
    filterBy: string
    searchQuery: string
    setSearchQuery: (filter: string) => ActionsType
    setFilter: (value: string) => ActionsType

}

const Filter: React.FC<FilterTypes> = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {

    return (
        <Menu secondary>
            <Menu.Item
                active={filterBy === 'all'}
                onClick={() => setFilter('all')}
            >Все</Menu.Item>
            <Menu.Item
                active={filterBy === 'price_high'}
                onClick={() => setFilter('price_high')}
            >Цена(дорогие)</Menu.Item>
            <Menu.Item
                active={filterBy === 'price_low'}
                onClick={() => setFilter('price_low')}
            >Цена(дешевые)</Menu.Item>
            <Menu.Item
                active={filterBy === 'author'}
                onClick={() => setFilter('author')}
            >Автор</Menu.Item>
            <Menu.Item>
                <Input
                    icon='search'
                    onChange={e => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    placeholder='Введите запрос..'/>
            </Menu.Item>
        </Menu>
    );
}
export default Filter;