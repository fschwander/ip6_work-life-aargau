import React from 'react';
import {useHistory} from 'react-router-dom';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {RectButton} from '../../components/buttons/RectButton';
import {QuizBox} from '../../components/widgets/QuizBox';
import bgImage from '../../res/imgs/AT_PSI_VILLIGEN.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/AT_PSI_VILLIGEN.svg'
import {questions} from './data/questions'

interface SlideProps {
  isActive: boolean
}

export const SlideWork: React.FC<SlideProps> = props => {
  const history = useHistory()

  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'SlideWork slide full-screen ' + (props.isActive ? 'isActive' : '')

  const redirectToMainPage = () => {
    history.push('/video')
  }

  return (
    <div className={rootClass}
         style={rootStyle}>
      <span className='background-filter'/>
      <AnimatedSVG svgComponent={SVGImage} isActive={props.isActive}/>

      <QuizBox className="quiz-companies" question={questions.companies}
               lineLength={100} lineRotationInDeg={320} orientation='right'/>
      <QuizBox className="quiz-jobs" question={questions.jobs}
               lineLength={200} lineRotationInDeg={235} orientation='left'/>

      <div className='bottom-element text-container'>
        <p>Du interessierst dich für die <b>Firmen</b> im Kanton Aargau?</p>
        <p>Entdecke <b>interessante Arbeitsplätze</b> und vieles mehr. Los geht's!</p>
      </div>

      <RectButton className='bottom-element go-to-main-button'
                  text='Abenteuer starten'
                  isActive={true}
                  onClick={redirectToMainPage}/>
    </div>
  )
}
