import React, { Component } from 'react';
import './Pokecard.css';
const pokemon_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
class Pokecard extends Component {
    render() {
        const props = this.props;
        const imgSrc = `${pokemon_API}${(("000"+props.id).slice(-3))}.png`
        console.log(imgSrc);
        return (
            <div className="Pokecard">
                <h1>{props.name}</h1>
                <img src={imgSrc} alt={props.name}/>
                <div>Type: {props.type}</div>
                <div>Experience: {props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard