import React from "react";

interface SelectionChipProps {
  text: string,
  onClick: Function
}

export const SelectionChip: React.FC<SelectionChipProps> = props => {


  const onClick = () => {
    if (props.onClick !== undefined) {
      props.onClick();
    }
  }

  return (


    <div className={`SelectionChip button chip-button`} onClick={onClick}>
      <p>{props.text}</p>
    </div>

  )


}
