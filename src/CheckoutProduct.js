import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import "./CheckoutProduct.css"


function CheckoutProduct({id, title, image, price, rating}) {

    const [, dispatch]= useStateValue();

    const RemovefromBasket = () => {
      dispatch({
        type: 'Remove_from_Basket',
          id: id
      })
    };

    return (
    <div className='checkoutProduct'>

            <img className='checkoutProduct__Image' src={image} alt='checkoutProduct_Image' />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map(() => (
                        <StarIcon />
                ))}
            </div>
            <button onClick={RemovefromBasket}>Remove from Basket</button>
        </div>
    </div>
    )
}

export default CheckoutProduct
