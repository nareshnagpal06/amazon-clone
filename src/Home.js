import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1x_Echo_Dot._CB428276184_.jpg" />

                <div className="home__row">
                    <Product id="10001" title="Logitech Mx Keys Logitech Mx Keys Logitech Mx Keys" price={29.99} rating={4} image={"https://images-eu.ssl-images-amazon.com/images/I/41TwdW6vn0L._AC_SY200_.jpg"} />
                    <Product id="10002" title="Mastech MAS830L Digital Pocket Multimeter (Assorted)" price={19.99} rating={4} image={"https://images-eu.ssl-images-amazon.com/images/I/51j4DBboQfL._AC_SX184_.jpg"} />
                    <Product id="10003" title="Mastech MAS830L Digital Pocket Multimeter (Assorted)" price={19.99} rating={4} image={"https://images-eu.ssl-images-amazon.com/images/I/51j4DBboQfL._AC_SX184_.jpg"} />
                    {/* <Product title="Mastech MAS830L Digital Pocket Multimeter (Assorted)" price={19.99} rating={4} image={"https://images-eu.ssl-images-amazon.com/images/I/51j4DBboQfL._AC_SX184_.jpg"} /> */}

                </div>
                <div className="home__row">
                    <Product id="10004" title="Clothes Oraganiser" price={29.99} rating={4} image={"https://images-eu.ssl-images-amazon.com/images/I/31SCxE8PWYL._AC_SY200_.jpg"} />
                    <Product id="10005" title="LG Ultrawide Monitor" price={219.99} rating={5} image={"https://images-eu.ssl-images-amazon.com/images/I/51pHuTzaK1L._AC_SY200_.jpg"} />
                    <Product id="10006" title="Treadmill" price={59.99} rating={4} image={"https://m.media-amazon.com/images/I/713Lmq6EfWL._AC_UL320_.jpg"} />
                </div>
                <div className="home__row">
                    <Product id="10007" title="Samsung Ultrawide Monitor 49'" price={1219.99} rating={5} image={"https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY436_QL65_.jpg"} />

                </div>
            </div>
        </div>
    )
}

export default Home
