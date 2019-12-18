import React from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {QuizBox} from '../../components/widgets/QuizBox';
import lenzburgImg from '../../res/imgs/AT_SCHLOSS_LENZBURG.jpg'
import {ReactComponent as lenzburgSvg} from '../../res/imgs/AT_SCHLOSS_LENZBURG.svg'
import {questions} from './data/questions'

interface SlideProps {
  isActive: boolean
}

export const SlideLife: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${lenzburgImg})`}
  const rootClass = 'SlideLife slide full-screen ' + (props.isActive ? 'isActive' : '')

  return (
    <div className={rootClass}
         style={rootStyle}>
      <span className='background-filter'/>
      <AnimatedSVG svgComponent={lenzburgSvg} isActive={props.isActive}/>

      <QuizBox className="quiz-reputation" question={questions.reputation}
               lineLength={140} lineRotationInDeg={300} orientation='left'/>
      <QuizBox className="quiz-history" question={questions.history}
               lineLength={130} lineRotationInDeg={235} orientation='left'/>
      <QuizBox className="quiz-sport" question={questions.sport}
               lineLength={80} lineRotationInDeg={40} orientation='right'/>

      <div className='bottom-element'>
        <p>Du möchtest mehr wissen über das <b>Leben</b> im Kanton Aargau?</p>
        <p><b>Perfekt!</b> Dann ist diese Plattform genau das Richtige für dich.</p>
      </div>
    </div>
  )
}

