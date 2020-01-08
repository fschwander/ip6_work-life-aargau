import React from "react";

interface SelectionChipProps {
  text: string
}

export const SelectionChip: React.FC<SelectionChipProps> = props => {


  return (


    <div className={`SelectionChip`}>
      <p>{props.text}</p>
    </div>

  )


}
