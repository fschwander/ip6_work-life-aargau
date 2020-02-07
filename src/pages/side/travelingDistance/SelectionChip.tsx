import React, {useState} from "react";

interface SelectionChipProps {
  text: string,
  onClick: Function
}

export const SelectionChip: React.FC<SelectionChipProps> = props => {
  const [isActive, setIsActive] = useState(true);

  const onClick = () => {
    if (props.onClick !== undefined) {
      props.onClick();
    }
    setIsActive(!isActive)
  }

  return (


    <div className={`SelectionChip button chip-button ${isActive ? 'is-active' : ''}`}
         onClick={onClick}>
      <p>{props.text}</p>
    </div>

  )


}
