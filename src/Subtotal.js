import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (

        <div className="subtotal">

            {/* <p>
                Subtotal (1 item):<strong>300.00</strong>
            </p>

            <small className="subtotal__gift">
                <input type="checkbox" value="gift" />This order contains a gift
            </small> */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="brd">
                            Subtotal ({basket.length} item):<strong>{value}</strong>
                        </p>

                        <small className="brd subtotal__gift">
                            <input className="brd" type="checkbox" value="gift" />This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className="subtotal__button brd">Proceed To Buy</button>

        </div>
    )
}

export default Subtotal
