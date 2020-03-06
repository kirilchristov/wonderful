import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Hero(props){
  const { carData } = props;

  const car1 = carData[0]
  const car2 = carData[1]
  const car3 = carData[2]

  return (
    
    <div className="hero">
      <div className="info">
        <p className="p-light">INTRODUCING THE NEW</p>
        <h1>{props.selectedCar.title}</h1>
        <p className="p-light">{props.selectedCar.info}</p>
      </div>
      <Carousel 
      className="carousel-custom"
      selectedItem={1}
      // showIndicators={false}
      showThumbs={false}
      dynamicHeight={true}
      showArrows={false}
      // centerMode={true}
      onChange={(e) => props.handleChange(e)}
      // centerSlidePercentage={50}
      statusFormatter={()=> {}} 
      >
        <div className="slide-wrapper left" onClick={()=> props.handleClick(car1.id)}>
          <img className="car-image" src={car1.imageUrl} alt={car1.title} />
        </div>
        <div className="slide-wrapper middle" onClick={()=> props.handleClick(car2.id)}>
          <img className="car-image" src={car2.imageUrl} alt={car2.title} />
        </div>
        <div className="slide-wrapper right" onClick={()=> props.handleClick(car3.id)}>
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



