import React from 'react';
import {RectButton} from '../../components/RectButton';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_974.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_974.svg'

interface SlideProps {
  isActive: boolean
}

export const Slide03: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide03 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  const redirectToMainPage = () => {
    // const history = useHistory()
    // history.push('/main')
  }

  return (
    <div className={rootClass}
         style={rootStyle}>

      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>

      <RectButton className='go-to-main-button'
                  text='Abenteuer starten'
                  isActive={true}
                  onClick={redirectToMainPage}/>
    </div>
  )
}
