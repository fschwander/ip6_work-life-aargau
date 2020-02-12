import React, {ReactElement} from "react";
import iconLocation from "../../res/icons/location.svg";
import {Slider} from "./Slider";

interface TimeLineProps {
  onClick: Function,
  activeIndex: number,
  nofIndexes: number,
  itemsArray: Array<{ isMainPoint: boolean }>
}

export const Timeline: React.FC<TimeLineProps> = props => {
  const {activeIndex, nofIndexes, itemsArray} = props;

  const getTimeLineItems = (): Array<ReactElement> => {
    let items = [];
    for (let i = 0; i < nofIndexes; i++) {
      let pointClass = itemsArray[i].isMainPoint ? 'large-point' : '';

      items.push(
        <div className='item' key={i}>
          <span
            className={`horizontal-line${i > activeIndex ? ' transparent' : ''}${i === activeIndex ? ' animate' : ''}`}
            style={{animationDuration: '3s'}}/>

          <div className={`button ${pointClass}`}
               key={i} onClick={() => props.onClick(i)}>
            <span className={`${i > activeIndex ? 'transparent' : ''}`}/>
          </div>
        </div>)
    }
    return items;
  };

  return (
    <div className='TimeLine'>
      <Slider/>

      <img src={iconLocation} alt='icon'/>

      <div className='timeline-items horizontal-container'>
        {getTimeLineItems()}
      </div>
    </div>
  )
};
