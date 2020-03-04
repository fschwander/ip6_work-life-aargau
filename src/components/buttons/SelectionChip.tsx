import React, {useState} from "react";

interface SelectionChipProps {
  text: string,
  onClick: Function,
  isActive?: boolean
}

export const SelectionChip: React.FC<SelectionChipProps> = props => {
  const [isActive, setIsActive] = useState(props.isActive !== undefined ? props.isActive : true);

  const onClick = () => {
    if (props.onClick !== undefined) {
      props.onClick();
    }
    setIsActive(!isActive)
  }

  return (
    <div className={`SelectionChip button chip-button ${isActive ? 'is-active' : 'is-inactive'}`}
         onClick={onClick}>
      <p>{props.text}</p>
    </div>
  )
}
