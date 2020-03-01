import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Hero(props){
  const { carData } = props;

  const car1 = carData[0]
  const car2 = carData[1]
  const car3 = carData[2]


  console.log(car1)
  return (
    <div className="hero">
      <Carousel 
      className="carousel-custom"
      selectedItem={1}
      showIndicators={false}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={50}
      >
        <div>
          <img className="car-image" src={car1.imageUrl} alt={car1.title}/>
          {/* <p className="legend">{car1.title}</p> */}
        </div>
        <div>
          <img className="car-image" src={car2.imageUrl} alt={car1.title}/>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img className="car-image" src={car3.imageUrl}  alt={car1.title}/>
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      <p className="legend">{car1.title}</p>
    </div>
  );
}

export default Hero;