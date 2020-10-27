import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

const [, dispatch]= useStateValue();

const addtobasket = () => {
  dispatch({
    type: 'ADD_to_Basket',
    item: {
      id: id,
      title: title,
      image: image,
      rating: rating,
      price: price
      }
  })
};

    return (
      <div className="product">

        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
                <StarIcon />
            ))}
        </div>
        </div>
        
        <img className="product__image" src={image} alt="Product img" />
        <button onClick={addtobasket}>Add to Basket</button>
        
      </div>
    );
}

export default Product
