import React from 'react';

import classes from './Product-card.module.css';

const ProductCard = (props) => {
    return (
        <div className={classes['product-card']}>
            <img src={props.image}></img>
            <br></br>
            <a href={props.url}>{props.name}</a>
            <h2>{props.oem}</h2>
            <span>{props.price}</span>
        </div>
    );
};

export default ProductCard;