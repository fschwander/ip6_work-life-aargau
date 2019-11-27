import React from 'react';
import './EntryLabel.scss'

interface EntryLabelProps {
  text: string
}

export const EntryLabel: React.FC <EntryLabelProps> = props => {

  return (
    <div className='EntryLabel'>
      <h3>{props.text}</h3>
      <div className='label-line'/>
    </div>
  )
}
