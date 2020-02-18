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
  if (i === 0 && filters[0].type === Constants.FILTER_MAJOR) {
    for (let j = 1; j < filters.length; j++) {
      filters[j].isActive = newFilterState;
    }
  }
  if (i > 0 && filters[0].type === Constants.FILTER_MAJOR) {
    let allFiltersActive = true;
    for(let j = 1; j < filters.length; j++) {
      if (!filters[j].isActive) {
        allFiltersActive = false;
        break;
      }
    }
    filters[0].isActive = allFiltersActive;
  }
  const newFilters = [...filters];
  setFilters(newFilters)
}

export const getDismissedFilters = (arrays:Array<Array<OptionFilter>>):Array<{type: string}> => {
  const dismissedFilters:Array<{type: string}> = [];
  arrays.forEach(array => {
    array.forEach(filterItem => {
      if(filterItem.type !== Constants.FILTER_MAJOR && !filterItem.isActive) {
        dismissedFilters.push({type: filterItem.type})
      }
    })
  })
  return dismissedFilters;
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
