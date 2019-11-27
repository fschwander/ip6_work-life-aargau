import React from 'react';
import {EntryLabel} from '../../components/EntryLabel';
import {HoverPoint} from '../../components/HoverPoint';
import {Quiz} from '../../components/Quiz';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
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
      title: "über den Aargau",
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
      title: "über den Aargau",
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
      title: "über den Aargau",
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

  return (
    <div className={rootClass}
         style={rootStyle}>
      <SVGStrokeAnimation svgComponent={SVGImage} isActive={props.isActive}/>
      <div className='question-container'>
        <div className='label'>
          <EntryLabel text={'freizeit'}/>
          <HoverPoint className={'hover-point'}
                      mouseClicked={() => {
                      }}/>
        </div>
        <Quiz question={questions[0]}/>
      </div>
    </div>
  )
}

