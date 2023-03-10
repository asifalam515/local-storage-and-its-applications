import React from 'react';
import  {addToDb, removeFromDb } from '../../utilities/fakedb';
import classes from './cosmetic.module.css'

const Cosmetic = (props) => {
    const{name,price,id}=props.cosmetic
    const addToCart=(id)=>{
      addToDb(id)

    }
    const addToCartWithParam=()=>{
        addToCart(id)
    }
    const removeFromCart=()=>{
        removeFromDb(id)
    }
    return (
        <div className={classes.product}>
            <h1>Buy this {name}</h1>
            <h2>Only for {price}</h2>
            <p>id: {id}</p>
            {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
            <button onClick={()=>addToCart(id)}>Add To Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;