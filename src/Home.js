import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
    <div className="home">
            
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/PrimeDelivery/DEX_2019_Prime_LP_Header_Desktop_3000x600._CB1567810399_.jpg" alt="Amazon Banner" />
            
        <div className="home__row">
            <Product 
            id="87566486"
            title="Harry Potter Hard Cover Boxed Set: Books #1-7" 
            price={150.07} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/91TfTh2kjNL._AC_UL320_.jpg"/>

            <Product 
            id="12346486"
            title="AmazonBasics Electric Glass and Steel Kettle - 1.7-Liter" 
            price={27.71} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/812C5q3i5+L._AC_UL320_.jpg"/>
        </div>

        <div className="home__row">
            <Product 
            id="12355556"
            title="Xbox Wireless Controller - Grey And Blue" 
            price={114} 
            rating={3} 
            image="https://m.media-amazon.com/images/I/619+iRxAVqL._AC_UY218_.jpg"/>

            <Product 
            id="12111186"
            title="OREO Chocolate Sandwich Cookies, 14.3 OZ" 
            price={3.25} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/81ad3xtNDlL._AC_UL320_.jpg"/>

            <Product 
            id="12415555"
            title="JBL Boombox 2 - Waterproof Portable Bluetooth Speaker - Squad Camo" 
            price={599} 
            rating={3} 
            image="https://m.media-amazon.com/images/I/81z6r5RYZUL._AC_UY218_.jpg"/>
        </div>

        <div className="home__row">
            <Product 
            id="11111486"
            title="SAMSUNG 75-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in" 
            price={1299} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/81fkfrkmjSL._AC_UY218_.jpg"/>
        </div>    

        <div className="home__row">
            <Product 
            id="22226486"
            title="Apple Watch Series 5 (GPS, 44mm) - Gold Aluminum Case with Pink Sport Band with AppleCare+ Bundle" 
            price={585} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/61tjld02v9L._AC_UY218_.jpg"/>

            <Product 
            id="33333486"
            title="Omron Blood Pressure Monitor - M2 Classic" 
            price={86.99} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/61dc3sGGWaL._AC_UL320_.jpg"/>
        
            <Product 
            id="99999486"
            title="Roadmaster - 26 Inches Granite Peak Men's Mountain Bike, Black/Blue" 
            price={264.99} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/61SUADlym1L._AC_UY218_.jpg"/>
        </div>
                
    </div>
    );
}

export default Home

