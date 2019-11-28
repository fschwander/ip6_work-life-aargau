import React from 'react';
import {QuizBox} from '../../components/widgets/QuizBox';
import {SVGStrokeAnimation} from '../../components/animations/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_905.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_905.svg'

interface SlideProps {
  isActive: boolean
}

export const Slide02: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide02 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  const questions = [
    {
      title: "Freizeit",
      subtitle: "Wofür ist der Aargau bekannt?",
      choices: [
        {text: "Wintersport", isCorrect: false},
        {text: "Land der Seen", isCorrect: false},
        {text: "Socken und Rüebli", isCorrect: true},
        {text: "Hohe Berge", isCorrect: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    },
    {
      title: "Unterhaltung",
      subtitle: "Wie gross ist das Wandernetzwerk vom Kanton Aargau?",
      choices: [
        {text: "5 Kilometer", isCorrect: false},
        {text: "540 Kilometer", isCorrect: false},
        {text: "1'630 Kilometer", isCorrect: true},
        {text: "12'530 Kilometer", isCorrect: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    },
    {
      title: "Geschichte",
      subtitle: "Wann wurde das Schloss Lenzburg gebaut?",
      choices: [
        {text: "vor dem Christus", isCorrect: false},
        {text: "im 12. Jahrhundert", isCorrect: true},
        {text: "im 16. Jahrhundert", isCorrect: false},
        {text: "im 18. Jahrhundert", isCorrect: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    }
  ]

  return (
    <div className={rootClass}
         style={rootStyle}>
      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>
      <QuizBox question={questions[0]} lineWidth={120} lineRotationInDeg={45}/>
      <QuizBox question={questions[1]} lineWidth={120} lineRotationInDeg={135} orientation='right'/>
      <QuizBox question={questions[2]} lineWidth={120} lineRotationInDeg={135} orientation='right'/>
    </div>
  )
}

