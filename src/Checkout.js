import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';


function Checkout() {
    
const [{basket}]= useStateValue();

    return (
        <div className='checkout'>

            <div className='checkout__left'>
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/amazoncash/Q3/AC_BB_1500x200_EN_20200908.jpg" alt="checkout__ad"/>
            
            {basket?.length === 0 ? (
                <div className="checkout__title2">
                    <h2>Your Shopping Cart is Empty</h2>
                    <p>Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more. </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        image={item.image}
                        />
                    ))
                    }
                </div>
            )
            }
            </div>

            {basket.length>0 && (
                <div className='checkout__right'>
                    <Subtotal/>
                </div>
            )}

        </div>
    );
}

export default Checkout
