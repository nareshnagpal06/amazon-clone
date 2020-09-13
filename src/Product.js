import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();



    const AddToBasket = () => {
        // dispatch item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    <p> ⭐</p>
                </div>
            </div>
            {/* <button>Add To Basket1</button> */}
            <img alt="" src={image} />

            <button onClick={AddToBasket}>Add To Basket</button>
        </div >
    )
}

export default Product
