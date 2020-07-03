import React from 'react';
import classes from './PizzaImg.css';
import pizzaimage from '../../assets/pizzaimg.jpg'

const PizzaImage = (props) => {
    return <div className={classes.pizzaImage}>
        <img src={pizzaimage} className={classes.PizzaImg}/>
    </div>
}

export default PizzaImage