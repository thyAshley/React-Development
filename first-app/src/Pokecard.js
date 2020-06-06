import React, { Component } from 'react';
import './Pokecard.css';

const pokemon_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
class Pokecard extends Component {
    render() {
        const props = this.props;
        const imgSrc = `${pokemon_API}${props.id}.png`
        console.log(imgSrc);
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <img src={imgSrc} alt={props.name}/>
                <div className="Pokecard-data">Type: {props.type}</div>
                <div className="Pokecard-data">Experience: {props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard