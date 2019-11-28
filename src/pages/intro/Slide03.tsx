import React from 'react';
import {useHistory} from 'react-router-dom';
import {QuizBox} from '../../components/QuizBox';
import {RectButton} from '../../components/RectButton';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_974.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_974.svg'

interface SlideProps {
  isActive: boolean
}

export const Slide03: React.FC<SlideProps> = props => {
  const history = useHistory()

  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide03 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  const questions = [
    {
      title: "Jobs",
      subtitle: "Wofür ist der Aargau bekannt?",
      choices: [
        {text: "Wintersport", isCorrect: false, wasSelected: false},
        {text: "Land der Seen", isCorrect: false, wasSelected: false},
        {text: "Socken und Rüebli", isCorrect: true, wasSelected: false},
        {text: "Hohe Berge", isCorrect: false, wasSelected: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    },
    {
      title: "Arbeitsplätze",
      subtitle: "Wie gröss is das Wanderwegnetzt des kanton Aargau?",
      choices: [
        {text: "5 Kilometer", isCorrect: false, wasSelected: false},
        {text: "540 Kilometer", isCorrect: false, wasSelected: false},
        {text: "1'630 Kilometer", isCorrect: true, wasSelected: false},
        {text: "12'530 Kilometer", isCorrect: false, wasSelected: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    },
    {
      title: "Unternehmen",
      subtitle: "Wann wurde das Schloss Lenzburg gebaut?",
      choices: [
        {text: "vor dem Christus", isCorrect: false, wasSelected: false},
        {text: "im 12. Jahrhundert", isCorrect: true, wasSelected: false},
        {text: "im 16. Jahrhundert", isCorrect: false, wasSelected: false},
        {text: "im 18. Jahrhundert", isCorrect: false, wasSelected: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    }
  ]

  const redirectToMainPage = () => {
    history.push('/main')
  }

  return (
    <div className={rootClass}
         style={rootStyle}>

      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>

      <RectButton className='go-to-main-button'
                  text='Abenteuer starten'
                  isActive={true}
                  onClick={redirectToMainPage}/>

      <QuizBox question={questions[0]} lineWidth={100} lineRotationInDeg={135}/>
      <QuizBox question={questions[1]} lineWidth={150} lineRotationInDeg={270}/>
      <QuizBox question={questions[2]} lineWidth={120} lineRotationInDeg={45} orientation='right'/>

    </div>
  )
}
