import React from "react";

interface PaginationListProps {
  setElementIndex: Function,
  nofElements: number,
  activeIndex: number
}

export const PaginationList: React.FC<PaginationListProps> = props => {

  const getNofItems = () => {
    let items = [];
    for (let i = 0; i < props.nofElements; i++) {
      items.push(<div className={`pagination-button button ${props.activeIndex === i ? 'active' : 'inactive'}`}
                      onClick={() => props.setElementIndex(i)}
                      key={i}/>)
    }
    return items
  }

  return (
    <div className={'PaginationList'}>
      {getNofItems()}
    </div>
  )
}
