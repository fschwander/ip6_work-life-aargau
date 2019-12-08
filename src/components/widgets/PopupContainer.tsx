import React from 'react';
import closeIcon from '../../res/icons/close.svg';
import {RoundButton} from '../buttons/RoundButton';

interface Props {
  onClose?: Function
}

export const PopupContainer: React.FC<Props> = props => {
  let rootRef = React.createRef<HTMLDivElement>();

  const closeNode = () => {
    if (props.onClose !== undefined) {
      props.onClose();
    } else if (rootRef.current != null) {
      // TODO: is not optimal, add better way to remove this component or children
      rootRef.current.remove()
    }
  }

  return (
    <div className='PopupContainer full-screen'>
      <div className='content-container'>
        {props.children}
        <RoundButton onClick={closeNode} icon={closeIcon} isActive={true}/>
      </div>
    </div>
  )
}
