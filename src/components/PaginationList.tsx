import React, {Component} from "react";
import './PaginationList.scss'

interface PaginationListProps {
  setElementIndex: Function,
  nofElements: number,
  activeIndex: number

}

export class PaginationList extends Component<PaginationListProps> {

  getNofItems() {
    let items = [];
    for (let i = 0; i < this.props.nofElements; i++) {
      items.push(<div className={`pagination-button ${this.props.activeIndex === i ? 'enabled' : 'disabled'}`}
                      onClick={() => this.props.setElementIndex(i)}
                      key={i}/>)
    }
    return items
  }

  render() {
    return (
      <div className={'PaginationList'}>
        {this.getNofItems()}
      </div>

    )

  }

}
