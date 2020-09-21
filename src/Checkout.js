import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';


function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h3>Hello {user ?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* <CheckoutProduct price={233} title={"Society Tea Instant Masala Tea Premix, 1kg - (Pack of 1)"} rating={4} image="https://m.media-amazon.com/images/I/41s2WF9wf6L._AC_SR250,230_.jpg" />
                    <CheckoutProduct price={233} title={"Society Tea Instant Masala Tea Premix, 1kg - (Pack of 1)"} rating={4} image="https://m.media-amazon.com/images/I/41s2WF9wf6L._AC_SR250,230_.jpg" /> */}
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} price={item.price} title={item.title} rating={item.rating} image={item.image} />
                    ))}
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
