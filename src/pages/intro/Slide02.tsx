import React from 'react';
import {SVGStrokeAnimation} from '../../components/animations/SVGStrokeAnimation';
import {QuizBox} from '../../components/widgets/QuizBox';
import bgImage from '../../res/imgs/galerie_picture_974.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_974.svg'

interface SlideProps {
  isActive: boolean
}

export const Slide02: React.FC<SlideProps> = props => {
  const rootStyle = {backgroundImage: `url(${bgImage})`}
  const rootClass = 'Slide02 slide slide-element full-screen ' + (props.isActive ? 'isActive' : '')

  const questions = [
    {
      className: "quiz-reputation",
      title: "Reputation",
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
      className: "quiz-history",
      title: "Geschichte",
      subtitle: "Warum prangt an der Mauer vom Schloss Lenzburg ein Berner Wappen?",
      choices: [
        {text: "Ist halt schön", isCorrect: false},
        {text: "Antike Vandalen", isCorrect: false},
        {text: "Bernerherrschaft", isCorrect: true},
        {text: "Berner Mauern", isCorrect: false},
      ],
      answer: "Im 15. bis 18. Jahrhundert gehörte des Schloss und seine Umgebung zu Bern. Durch die Gründung vom Aargau um 1803 ging der Besitz zum heutigen Kanton."
    },
    {
      className: "quiz-sport",
      title: "Sport",
      subtitle: "Welcher Kanton hat das längste Netzwerk von Fahrradwegen?",
      choices: [
        {text: "Bern", isCorrect: false},
        {text: "Aargau", isCorrect: true},
        {text: "Zürich", isCorrect: false},
        {text: "Genf", isCorrect: false},
      ],
      answer: "Von wegen, Aargauerinnen und Aargauer können nur Auto fahren: Kein anderer Kanton besitzt mehr Fahrradwege!"
    }
  ]

  return (
    <div className={rootClass}
         style={rootStyle}>
      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>
      <QuizBox question={questions[0]} lineWidth={120} lineRotationInDeg={300} orientation='left'/>
      <QuizBox question={questions[1]} lineWidth={130} lineRotationInDeg={40} orientation='right'/>
      <QuizBox question={questions[2]} lineWidth={160} lineRotationInDeg={245} orientation='left'/>

      <div className='bottom-element'>
        <p>Du möchtest mehr wissen über für das <b>Leben</b> im Kanton Aargau?</p>
        <p><b>Perfekt!</b> Dann ist diese Platform genau das Richtige für dich.</p>
      </div>
    </div>
  )
}

