import React from 'react';
import {SelectionChip} from '../../components/buttons/SelectionChip';
import {Constants} from '../../services/Constants';

export interface OptionFilter {
  name: string,
  isActive: boolean,
  type: string
}

export const updateFilters = (filters: Array<OptionFilter>, i: number, setFilters: Function) => {
  const newFilterState = !filters[i].isActive;
  filters[i].isActive = newFilterState;
  if (i === 0 && filters[i].type === Constants.FILTER_MAJOR) {
    for (let j = 1; j < filters.length; j++) {
      filters[j].isActive = newFilterState;
    }
  }
  const newFilters = [...filters];
  setFilters(newFilters)
}

export const mapOptionFilters = (filters: Array<OptionFilter>, setFilters: Function) => {
  return filters.map((filter, i) => {
    return <SelectionChip text={filter.name} key={filter.name + i}
                          isActive={filter.isActive}
                          onClick={() => updateFilters(filters, i, setFilters)}/>
  })
};

export const MenuFilterPage: React.FC = props => {
  return (
    <div className='MenuFilterPage'>
      {props.children}
    </div>
  )
}
