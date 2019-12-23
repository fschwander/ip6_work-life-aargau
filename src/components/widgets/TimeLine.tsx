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

  const getTimeLineItems = (): Array<ReactElement> => {
    let items = [];
    for (let i = 0; i < props.nofIndexes; i++) {
      let pointClass = props.itemsArray[i].isMainPoint ? 'large-point' : '';

      items.push(
        <div className='item' key={i}>
          <div className={`button ${pointClass}`}
               key={i} onClick={() => props.onClick(i)}>
            <span className={`${i > props.activeIndex ? 'transparent' : ''}`}/>
          </div>
          {i < props.nofIndexes - 1 ?
            <span className={`horizontal-line ${i >= props.activeIndex ? 'transparent' : ''}`}/> : null}
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
