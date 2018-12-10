/**
 * Module Dependencies
 */
import React from 'react';
import PokeTable from './components/PokeTable';

var pokemons = [
    {number: 1, name: 'Bulbasur'},
    {number: 2, name: 'Ivysaur'},
    {number: 3, name: 'Venosaur'}
];

React.render(<PokeTable pokemons={pokemons}/>, document.getElementById('container'));