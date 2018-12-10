/**
 * Module Dependencies
 */
import React from 'react';

export default class PokeAvatar extends React.Component {
    render(){
        var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
        return <img src={url} className="avatar"/>
    }
}

/**
 * Exportamos la clase que acabamos de crear
 * export default PokeAvatar;
 **/