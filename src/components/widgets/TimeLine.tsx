import React, {ReactElement} from "react";
import iconLocation from "../../res/icons/location.svg";
import { useHistory } from "react-router-dom";

interface TimeLineProps {
  onClick: Function,
  activeIndex: number,
  nofIndexes: number,
  itemsArray: Array<{ isMainPoint: boolean, animDurationInSec: number }>
}

export const Timeline: React.FC<TimeLineProps> = props => {
  const {activeIndex, nofIndexes, itemsArray} = props;
  const history = useHistory()

  const getTimeLineItems = (): Array<ReactElement> => {
    let items = [];
    for (let i = 0; i < nofIndexes; i++) {
      let pointClass = itemsArray[i].isMainPoint ? 'large-point' : '';

      items.push(
        <div className='item' key={i}>

          <div className={`button ${pointClass}`}
               key={i} onClick={() => props.onClick(i)}>
            <span className={`${i > activeIndex ? 'transparent' : ''}`}/>
          </div>

          <span
            className={`horizontal-line${i > activeIndex ? ' transparent' : ''}${i === activeIndex ? ' animate' : ''}`}
            style={{animationDuration: itemsArray[i].animDurationInSec + 's'}}/>
        </div>)
    }
    return items;
  };

  return (
    <div className='TimeLine'>
      <div className='timeline-items horizontal-container'>
        {getTimeLineItems()}
      </div>

      <img className={'button'} src={iconLocation} alt='icon' onClick={() => history.push('/menu')}/>
    </div>
  )
};
