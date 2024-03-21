

import React, { useState } from 'react';
import "../Slider/Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };
  
    return (
      <div className='slide'>
        {currentSlide === 0 && <div>Slide n°1</div>}
        {currentSlide === 1 && <div>Slide n°2</div>}
        {currentSlide === 2 && <div>Slide n°3</div>}
        <button onClick={prevSlide}>Previous</button> &nbsp;
        <button onClick={nextSlide}>Next</button>
      </div>
    );
  };
export default Slider;
