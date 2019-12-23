import React, {ReactElement} from "react";

interface TimeLineProps {
  onClick: Function,
  nofItems: number
}

export const Timeline: React.FC<TimeLineProps> = props => {

  const getTimeLineItems = (): Array<ReactElement> => {
    let items = [];
    for (let i = 0; i < props.nofItems; i++) {
      items.push(<div className={`button`} key={i} onClick={() => props.onClick(i)}/>)
    }
    return items;
  };

  return (
    <div className='TimeLine'>
      {getTimeLineItems()}
    </div>
  )
};
