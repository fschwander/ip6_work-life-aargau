import * as React from "react";
import iconArrowDown from "../../res/icons/arrow_down.svg";

interface SliderProps {

}

export const Slider: React.FC<SliderProps> = props => {

  return (
    <div className='Slider button horizontal-container'>
      <p>Baden</p>
      <img src={iconArrowDown} alt='icon'/>
    </div>
  )
}
