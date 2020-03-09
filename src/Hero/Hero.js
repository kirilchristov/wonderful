import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//In this file a left a lot of repetative code just for clarity. It's not DRY at all, but it is one-time only (for visual clarity), it can be easily can be mapped as well. 
function Hero(props){
  const { carData } = props;

  const car1 = carData[0]
  const car2 = carData[1]
  const car3 = carData[2]

  return (
    <div className="hero" data-aos='fade-in'>
      <div className="info" data-aos='fade-in'>
        <p className="p-light">INTRODUCING THE NEW</p>
        <h1>{props.selectedCar.title}</h1>
        <p className="p-light">{props.selectedCar.info}</p>
        <ul className="dots">
          <li className={props.selectedCar.id === car1.id ? 'filledDot' : 'emptyDot'}></li>
          <li className={props.selectedCar.id === car2.id ? 'filledDot' : 'emptyDot'}></li>
          <li className={props.selectedCar.id === car3.id ? 'filledDot' : 'emptyDot'}></li>
        </ul>
      </div>
      <Carousel 
      className="carousel-custom"
      selectedItem={1}
      showThumbs={false}
      dynamicHeight={true}
      showArrows={false}
      onChange={(e) => props.handleChange(e)}
      showStatus={false}
      showIndicators={true}
      >
        <div className="slide-wrapper" onClick={()=> props.handleClick(car1.id)}>
          <img className="car-image" src={car1.imageUrl} alt={car1.title} />
        </div>
        <div className="slide-wrapper" onClick={()=> props.handleClick(car2.id)}>
          <img className="car-image" src={car2.imageUrl} alt={car2.title} />
        </div>
        <div className="slide-wrapper" onClick={()=> props.handleClick(car3.id)}>
          <img className="car-image" src={car3.imageUrl}  alt={car3.title} />
        </div>
      </Carousel>
      <div className="text">
        <p className="car-model">{props.selectedCar.title}</p>
        <p className="price-tag">STARTING AT ${props.selectedCar.price}</p>
      </div>
    </div>
  );
}

export default Hero;



