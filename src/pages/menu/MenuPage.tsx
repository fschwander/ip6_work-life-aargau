import React from 'react';
import backgroundImage from '../../res/imgs/menu_aargau.jpg'

export const MenuPage: React.FC = () => {

  return(
    <div className={`MenuPage full-screen`}
         style={{backgroundImage: `url(${backgroundImage})`}}>
      yo
    </div>
  )
}
