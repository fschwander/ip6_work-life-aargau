import React from 'react';
import {SelectionChip} from '../../components/buttons/SelectionChip';

export interface OptionFilter {
  name: string,
  isActive: boolean,
  type: string
}

export const updateFilters = (filters: Array<OptionFilter>, i: number, setFilters: Function) => {
  filters[i].isActive = !filters[i].isActive;
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

export const MenuFilterPage:React.FC = props => {
  return (
    <div className='MenuFilterPage'>
      {props.children}
    </div>
  )
}
