import React from "react";
import Product from "../Procuct/Product";
import "./Home.css";

function Home() {
  function randomId() {
    return Math.floor(Math.random() * 1000000000);
  }

  return (
    <div>
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61ylrSkjNdL._SX3000_.jpg"
          alt=""
        /> */}
        <video
          className="home__image"
          preload="auto"
          muted
          autoPlay
          loop="2000"
        >
          <source
            src="https://m.media-amazon.com/images/I/A1eYGi0j9PL.mp4"
            type="video/mp4"
          />
        </video>
        <div className="home_row">
          <Product
            id={randomId()}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 512GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Green"
            price={1099}
            rating={5}
            image="https://m.media-amazon.com/images/I/61nhOdlKpDL._AC_UY218_.jpg"
          />
          <Product
            id={randomId()}
            title="Jade Leaf Organic Matcha Green Tea Powder - Authentic Japanese Origin - Premium Second Harvest Culinary Grade (1.06 Ounce)"
            price={10}
            rating={4}
            image="https://m.media-amazon.com/images/I/71OF+3KbZqL._AC_SY230_.jpg"
          />
          <Product
            id={randomId()}
            title="Apple EarPods Headphones with Lightning Connector."
            price={17}
            rating={4}
            image="https://m.media-amazon.com/images/I/41HrhATMTqL._AC_SY355_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id={randomId()}
            title="CELSIUS Essential Energy Drink 12 Fl Oz, Peach Mango Green Tea (Pack of 12)"
            price={22}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81cHlh0P7PL._AC_UL600_SR600,400_.jpg"
          />
          <Product
            id={randomId()}
            title="Ray-Ban Women's Rb3647n Double Bridge Round Sunglasses"
            price={225}
            rating={4}
            image="https://m.media-amazon.com/images/I/61nsOpUy4LL._AC_UX679_.jpg"
          />
          <Product
            id={randomId()}
            title="Bialetti Express Moka Pot, 6 -Cup, Aluminum Silver"
            price={47}
            rating={2}
            image="https://m.media-amazon.com/images/I/51I5yOJUkfL._AC_SX466_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id={randomId()}
            title="Amazon Fire TV 43inch 4-Series 4K UHD smart TV"
            price={251}
            rating={3}
            image="https://m.media-amazon.com/images/I/618Yxam1kWL._AC_UY218_.jpg"
          />
          <Product
            id={randomId()}
            title="VIOTEK GNV34DB2 34-Inch UltraWide WQHD Curved Gaming Monitor | 21:9 3440x1440p 1500R | HDR Ready, 3000:1 Contrast Ratio | 100Hz FreeSync FPS/RTS | 1x DP 3x HDMI with PIP/PBP | 3 Years Zero Dead Pixels"
            price={358}
            rating={3}
            image="https://m.media-amazon.com/images/I/71H6TFHWFgL._AC_SX569_.jpg"
          />
          <Product
            id={randomId()}
            title="2022 Acer 15inch HD IPS Chromebook, Intel Dual-Core Celeron Processor Up to 2.55GHz, 4GB RAM, 32GB Storage, Super-Fast WiFi Up to 1300 Mbps, Chrome OS-(Renewed) (Dale Silver)"
            price={344}
            rating={3}
            image="https://m.media-amazon.com/images/I/71-QYvMpwGL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
