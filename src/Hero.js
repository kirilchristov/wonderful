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
      <Carousel 
      className="carousel-custom"
      selectedItem={1}
      // showIndicators={false}
      showThumbs={false}
      showArrows={false}
      centerMode={true}
      onChange={(e) => props.handleChange(e)}
      centerSlidePercentage={50}
      statusFormatter={(curr, total)=>console.log(`Slide ${curr} of ${total}`)} 
      >
        <div onClick={()=> props.handleClick(car1.id)}>
          <img className="car-image" src={car1.imageUrl} alt={car1.title} />
        </div>
        <div onClick={()=> props.handleClick(car2.id)}>
          <img className="car-image" src={car2.imageUrl} alt={car2.title} />
        </div>
        <div onClick={()=> props.handleClick(car3.id)}>
          <img className="car-image" src={car3.imageUrl}  alt={car3.title} />
        </div>
      </Carousel>
      <p className="legend">{props.selectedCar.title}</p>
      <p className="price">STARTING AT ${props.selectedCar.price}</p>
      <div className="info">
        <p>{props.selectedCar.info}</p>
      </div>
    </div>
  );
}

export default Hero;

//Let's create dynamic element that pulls data
  // const CarElement = carData.map((car,idx) => {
  //   console.log('line 14 Hero',car)
  //   return (
  //     <div onClick={props.handleClick}>
  //       <img className="car-image" src={car[idx].imageUrl}  alt={car[idx].title} />
  //     </div>
  //   )
  // })


