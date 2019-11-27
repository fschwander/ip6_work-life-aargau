import React from 'react';


interface EntryLabelProps {
  text: string
}

export const EntryLabel: React.FC <EntryLabelProps> = props => {

  return (
    <div className='entry label'>
      <h3 className='large'>{props.text}</h3>
    </div>
  )
}
