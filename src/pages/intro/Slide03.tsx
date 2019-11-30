import React from 'react';
import {useHistory} from 'react-router-dom';
import {SVGStrokeAnimation} from '../../components/animations/SVGStrokeAnimation';
import {RectButton} from '../../components/buttons/RectButton';
import {QuizBox} from '../../components/widgets/QuizBox';
import bgImage from '../../res/imgs/galerie_picture_905.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_905.svg'

interface SlideProps {
  isActive: boolean
}

export const Slide03: React.FC<SlideProps> = props => {
  const history = useHistory()

  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide03 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  const questions = [
    {
      className: "quiz-companies",
      title: "Firmen",
      subtitle: "Welche der folgenden Firmen hat einen wichtigen Standort im Kanton Aargau?",
      choices: [
        {text: "Mammut", isCorrect: true},
        {text: "Roche", isCorrect: true},
        {text: "Novartis", isCorrect: true},
        {text: "Apple", isCorrect: false}
      ],
      answer: "Richtig! Alle diese Firmen haben Standorte im Aargau. Und alle suchen nach Fachkräften!"
    },
    {
      className: "quiz-jobs",
      title: "Arbeitsplätze",
      subtitle: "Welche Arbeitskräfte fehlen dem Aargau am meisten?",
      choices: [
        {text: "Keine", isCorrect: false},
        {text: "Alle", isCorrect: false},
        {text: "Fachkräfte", isCorrect: true},
        {text: "Du", isCorrect: true}
      ],
      answer: "Richtig, der Kanton Aargau braucht Dich! Durch den Fachkräftemangel hast du die Qual der Wahl."
    }
  ]

  const redirectToMainPage = () => {
    history.push('/video')
  }

  return (
    <div className={rootClass}
         style={rootStyle}>

      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>



      <QuizBox question={questions[0]} lineLength={80} lineRotationInDeg={320} orientation='right'/>
      <QuizBox question={questions[1]} lineLength={100} lineRotationInDeg={235} orientation='left'/>

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
